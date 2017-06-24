const Country = class {
  constructor (db) {
    this.db = db
  }

  getCountryByAirportCode (code) {
    return this.db.get('*', 'airports', 'iata = ?', code)
      .then((res) => {
        if(res) return res.country
        return null
      })
  }
}


module.exports = Country