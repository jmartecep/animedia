"use strict";
const axios = require("axios");
const Show = use("App/Models/Show");
const Genre = use("App/Models/Genre");
const Episode = use("App/Models/Episode");

class SeederController {
  async seeder() {
    console.log("pre fetch");
    let offset = 20;
    axios
      .get(
        "https://private-anon-1afde16162-kitsu.apiary-proxy.com/api/edge/anime?page[limit]=20&page[offset]=" +
          offset
      )
      .then(async response => {
        let data = await response.data.data;
        console.log("data fetched");

        data.forEach(async show => {
          if (show.attributes.canonicalTitle) {
            let singleShow = new Show();
            let singleAttr = show.attributes;
            singleShow.title = singleAttr.canonicalTitle;
            singleShow.description = singleAttr.synopsis;
            singleShow.averageRating = singleAttr.averageRating;
            singleShow.startDate = singleAttr.startDate;
            singleShow.endDate = singleAttr.endDate;
            singleShow.ageRating = singleAttr.ageRatingGuide;
            singleShow.airedOn = singleAttr.subtype;
            singleShow.ratingRank = singleAttr.ratingRank;
            singleShow.poster = singleAttr.posterImage.original;
            singleShow.coverImage = singleAttr.coverImage.original;
            singleShow.youtubeTrailerId = singleAttr.youtubeVideoId;

            let genres = show.relationships.genres.links.related;
            try {
              genres = await this.getResource(genres)
                .then(async genreReponse => {
                  let genreData = await genreReponse.data.data;
                  genres = genreData;
                  console.log("genres fetched");
                  return genres;
                })
                .catch(err => {
                  console.log(err);
                });
            } catch (err) {
              console.log(err);
            }

            let keys = [];
            genres.forEach(async genre => {
              keys.push(genre.id);
            });

            singleShow.genres = keys.join();

            let epiOffset = 0;

            while (epiOffset < 100) {
              let episodes =
                show.relationships.episodes.links.related +
                "?page[limit]=20&page[offset]=" +
                epiOffset;

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
                      episode.airDate = epi.airDate;

                      if (epi.thumbnail) {
                        episode.thumbnail = epi.thumbnail.original;
                      } else {
                        episode.thumbnail = null;
                      }

                      episode.showId = show.id;
                      console.log("episode found");
                      await episode.save();
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              } catch (err) {
                console.log("not enough episodes");
              }

              epiOffset += 20;
            }

            epiOffset = 0;

            console.log("show save");
            await singleShow.save();
          } else {
            console.log("no title");
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getResource(link) {
    return axios.get(link);
  }

  async genreSeed() {
    let offset = 0;
    return axios
      .get(
        "https://private-anon-1afde16162-kitsu.apiary-proxy.com/api/edge/genres?page[limit]=20&page[offset]=" +
          offset
      )
      .then(async response => {
        let data = await response.data.data;

        data.forEach(async object => {
          let genre = new Genre();
          genre.title = object.attributes.name;

          await genre.save();
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = SeederController;
