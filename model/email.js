const cheerio = require('cheerio');
const moment = require('moment');
const _ = require('lodash');

const Email = class {
  constructor () {
    console.log("Initing email parser")
  }

  getAirportKey (str) {
    const init = str.indexOf('(');
    const fin = str.indexOf(')');
    return str.substr(init+1,fin-init-1)
  }

  parseDate (date) {
    const parsed = moment(date, "MMM DD HH:mm")

    if(moment().isAfter(parsed))
      parsed.add(1, 'y')

    return parsed
      .format('DD.MM.YYYY HH:mm')
  }

  parse (html) {
    const $ = cheerio.load(html)

    // outbounds
    const departures = $('img[alt=outbound]').first().parent().parent()
    const arrival = $('img[alt=inbound]').last().parent().parent()

    const info = {
      from: departures.find('td:nth-child(4)').text(),
      to: arrival.find('td:nth-child(4)').text(),
      dateRaw: _.trim(departures.find('td:nth-child(2)').text())
    }

    info.fromKey = this.getAirportKey(info.from);
    info.toKey = this.getAirportKey(info.to);
    info.date = this.parseDate(info.dateRaw);

    return info
  }
}


module.exports = new Email()