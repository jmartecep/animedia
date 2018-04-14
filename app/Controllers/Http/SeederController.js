"use strict";

class SeederController {
  async seeder() {
    const Show = use("App/Models/Show");
    const Genre = use("App/Models/Genre");
    //validator
    const { validate } = use("Validator");

    axios
      .get(
        "https://private-anon-1afde16162-kitsu.apiary-proxy.com/api/edge/anime?page[limit]=20&page[offset]=0"
      )
      .then(async response => {
        let data = await response.data.data;

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

            let genres = show.relationships.genres.links.related;
            try {
              genres = await this.getGenres(genres)
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

            let keys = [];
            genres.forEach(async genre => {
              keys.push(genre.id);
            });

            singleShow.genres = keys.join();

            console.log(show);

            await singleShow.save();
          } else {
            console.log("no title");
          }
        });

        return Genre.all().toJSON();
      })
      .catch(err => {
        console.log(err);
      });
  }

  async getGenres(link) {
    return axios.get(link);
  }
}

module.exports = SeederController;
