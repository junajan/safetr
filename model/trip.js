const TripStore = class {
  constructor () {
    console.log("Initing trip store")
    this.trips = {}
  }

  add(id, trip) {
    if(!this.trips[id])
      this.trips[id] = []

    this.trips[id].push(trip)
  }

  get(id) {
    return this.trips[id] || [];
  }

  getByIndex(id, index) {
    if(!this.trips[id])
      this.trips[id] = []

    return this.trips[id][index] || [];
  }
}


module.exports = new TripStore()