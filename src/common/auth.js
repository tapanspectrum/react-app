class Auth {
  constructor() {
    this.authenticated = false;
  }
//   login(username, password, cb) {
//     if (username && password) {
//       this.authenticated = true;
//       cb();
//     }
//   }
login(cb) {
    // if (username && password) {
      this.authenticated = true;
      cb();
    // }
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
