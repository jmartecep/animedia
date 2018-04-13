"use strict";
const axios = require("axios");
const Genre = use("App/Models/Genre");
const Episode = use("App/Models/Episode");

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

          let genres = show.relationships.genres.links.related;
          let episodes = show.relationships.episodes.links.related;
          try {
            genres = await this.getResource(genres)
              .then(async genreReponse => {
                let genreData = await genreReponse.data.data;
                genres = genreData;
                return genres;
              })
              .catch(err => {
                console.log(err);
              });
          } catch (err) {
            console.log(err);
          }

          try {
            episodes = await this.getResource(episodes)
              .then(async episodeReponse => {
                let episodeData = await episodeReponse.data.data;

                episodeData.forEach(async epi => {
                  epi = epi.attributes;
                  let episode = new Episode();
                  episode.title = epi.canonicalTitle;
                  episode.seasonNumber = epi.seasonNumber;
                  episode.number = epi.number;
                  episode.synopsis = epi.synopsis;
                  episode.length = epi.length;
                  episode.airDate = epi.airdate;
                  if (epi.thumbnail.original) {
                    episode.thumbnail = epi.thumbnail.original;
                  }
                  episode.showId = show.id;
                  await episode.save();
                });
              })
              .catch(err => {
                console.log(err);
              });
          } catch (err) {}

          let keys = [];
          genres.forEach(async genre => {
            keys.push(genre.id);
          });

          singleShow.genres = keys.join();

          await singleShow.save();
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getResource(link) {
    return axios.get(link);
  }
}

module.exports = GenreController;
