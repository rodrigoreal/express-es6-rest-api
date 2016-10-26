class User {
  constructor(name) {
    this.user = name;
  }

  get() {
    return new Promise((resolve, reject) => {
      if (this.user !== undefined && this.user !== '') {
        resolve(this.user);
      } else {
        reject('no name defined');
      }
    });
  }
}

export default User;
