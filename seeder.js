const axios = require("axios");
const Show = use("App/Models/Show");
const Genre = use("App/Models/Genre");

async function getGenres(link) {
  axios.get(link).then(async reponse => {
    let genreData = await response.data.data;
    return genreData;
  });
}

axios
  .get(
    "https://private-anon-1afde16162-kitsu.apiary-proxy.com/api/edge/anime?page[limit]=20&page[offset]=0"
  )
  .then(async response => {
    let data = await response.data.data;

    data.forEach(async show => {
      let newShow = new Show();
      let singleAttr = show.attributes;
      newShow.title = singleAttr.titles.en;
      newShow.averageRating = singleAttr.averageRating;
      newShow.startDate = singleAttr.startDate;
      newShow.endDate = singleAttr.endDate;
      newShow.ageRating = singleAttr.ageRatingGuide;
      newShow.airedOn = singleAttr.subtype;

      let genres = show.attributes.relationships.genres.links.related;
      genres = await getGenres(genres);

      let keys = [];
      genres.forEach(async genre => {
        keys.push(genre.id);
      });

      show.genres = keys.join();

      await show.save();
    });

    return Genre.all().toJSON();
  })
  .catch(err => {
    console.log(err);
  });
