"use strict";
const axios = require("axios");

class GenreController {
  async index() {
    return axios
      .get("https://kitsu.io/api/edge/genres")
      .then(async response => {
        let data = await response.data;
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = GenreController;
