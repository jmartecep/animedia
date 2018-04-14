const axios = require("axios");

class API {
  BASE_URL = "https://kitsu.io/api/edge/genres";

  get() {
    return axios.get(this.BASE_URL);
  }
}

module.exports = { API };
