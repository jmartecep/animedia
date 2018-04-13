"use strict";
const axios = require("axios");
const Genre = use("App/Models/Genre");

class GenreController {
  // async index() {
  //   return axios
  //     .get(
  //       "https://private-anon-1afde16162-kitsu.apiary-proxy.com/api/edge/genres?page[limit]=20&page[offset]=0"
  //     )
  //     .then(async response => {
  //       let data = await response.data.data;

  //       data.forEach(async object => {
  //         let genre = new Genre();
  //         genre.title = object.attributes.name;
  //         genre.key = object.id;

  //         await genre.save();
  //       });

  //       return Genre.all().toJSON();
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  async index() {
    const Show = use("App/Models/Show");
    const Genre = use("App/Models/Genre");

    async function getGenres(link) {
      axios
        .get(link)
        .then(async reponse => {
          let genreData = await response.data.data;
          return genreData;
        })
        .catch(err => {
          console.log(err);
        });
    }

    axios
      .get(
        "https://private-anon-1afde16162-kitsu.apiary-proxy.com/api/edge/anime?page[limit]=20&page[offset]=0"
      )
      .then(async response => {
        let data = await response.data.data;

        data.forEach(async show => {
          let singleShow = new Show();
          let singleAttr = show.attributes;
          singleShow.title = singleAttr.titles.en;
          singleShow.averageRating = singleAttr.averageRating;
          singleShow.startDate = singleAttr.startDate;
          singleShow.endDate = singleAttr.endDate;
          singleShow.ageRating = singleAttr.ageRatingGuide;
          singleShow.airedOn = singleAttr.subtype;

          let genres = show.attributes.relationships.genres.links.related;
          genres = await getGenres(genres);

          let keys = [];
          genres.forEach(async genre => {
            keys.push(genre.id);
          });

          show.genres = keys.join();

          console.log(show);

          await show.save();
        });

        return Genre.all().toJSON();
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = GenreController;
