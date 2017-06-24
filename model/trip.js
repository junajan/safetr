const TripStore = class {
  constructor () {
    console.log("Initing trip store")
    this.trips = {}
  }

  get (id) {
    return this.trips[id]
  }

  set (id, trip) {
    this.trips[id] = trip
  }

  getList() {
    return this.trips
  }
}


module.exports = new TripStore()