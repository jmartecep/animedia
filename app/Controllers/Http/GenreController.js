"use strict";
const axios = require("axios");
const Genre = use("App/Models/Genre");

class GenreController {
  async index() {
    let genres = Genre.all();
    return genres;

    // return axios
    //   .get(
    //     "http://localhost"
    //   )
    //   .then(async response => {
    //     let data = await response.data.data;

    //     data.forEach(async object => {
    //       let genre = new Genre();
    //       genre.title = object.attributes.name;
    //       genre.key = object.id;

    //       await genre.save();
    //     });

    //     return Genre.all().toJSON();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
}

module.exports = GenreController;
