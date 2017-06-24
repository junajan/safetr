const request = require('request-promise')
const cheerio = require('cheerio')
const _ = require('lodash')
const Promise = require('bluebird')

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('')

const config = require('../config/auth')
const DB = require('../modules/mysql')(config.mysql);

function getUrl(letter) {
  return `https://www.world-airport-codes.com/alphabetical/airport-code/${letter}.html`
}

function isLetterFilled(letter) {
  return DB.get('*', 'airports', 'letter = ?', letter)
}

function saveData(data, letter) {
  const dataIn = data.map((row) => [row.airport, row.city, row.country, row.iata, letter])
  return DB.insertMultiple('airports (airport, city, country, iata, letter)', dataIn)
}

function getData(url, letter) {
  const data = []
  console.log(" > Downloading section", letter)
  return request(url)
    .then((res) => {
      $ = cheerio.load(res)
      $('table.stack').each((index, table) => {

        $(table).find('table.stack tr').each(function(index, el) {
          el = $(el)

          if(el.find('td').length === 0)
            return;

          const info = {
            airport: el.find('th').first().text() || el.find('td').first().text(),
            city: el.find('td:nth-child(2)').text(),
            country: el.find('td:nth-child(3)').text(),
            iata: el.find('td:nth-child(4)').text(),
          }

          info.airport = _.trim(info.airport.replace('This airport is closed', ''))
          data.push(info)
        })
      })

      console.log(" < Downloaded section", letter)
    })
    .return(data)
}

Promise.map(alphabet, (letter) => {
  const url = getUrl(letter)
  return isLetterFilled(letter)
    .then((res) => (res ? [] : getData(url, letter)))
    .then((data) => (
      data.length
        ? saveData(data, letter)
            .catch((err) => {
              console.log(data)
              console.error(err)
              return Promise.resolve()
            })
        : Promise.resolve()
    ))
}, { concurrency: 5 })
.then(() => {
  console.log("Fetched all data")
})
  .then((res) => {
  console.log(res)
  })
.catch((err) => {
  console.log("ERR:", err.stack || err)
})