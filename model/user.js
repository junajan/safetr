const UserStore = class {
  constructor () {
    console.log("Initing user store")
    this.users = {}
  }

  get (id) {
    return this.users[id]
  }

  set (id, user) {
    this.users[id] = user
  }

  getList() {
    return this.users
  }
}


module.exports = new UserStore()