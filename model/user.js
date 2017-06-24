const conf = require("../config/auth")

const UserStore = class {
  constructor () {
    console.log("Initing user store with domain %s", conf.trackingDomain)
    this.users = {}
    this.trackingDomain = conf.trackingDomain
  }

  get (id) {
    return this.users[id]
  }

  set (id, user) {
    user.trackingEmail = [id, this.trackingDomain].join('@')
    this.users[id] = user
  }

  getList() {
    return this.users
  }
}


module.exports = new UserStore()