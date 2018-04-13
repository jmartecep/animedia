const axios = require("axios");

class API {
  constructor(url) {
    this.url = url;
  }

  get() {
    return axios.get(this.url);
  }
}

module.exports = API;
