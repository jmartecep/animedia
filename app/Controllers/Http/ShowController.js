"use strict";
const Show = use("App/Models/Show");
const Episode = use("App/Models/Episode");

class ShowController {
  index() {
    let shows = Show.all();

    return shows;
  }

  async show(req) {
    let id = req.params.id;
    let show = await Show.query()
      .where("id", "=", id)
      .fetch();

    return show;
  }

  async episodes(req) {
    let id = req.params.id;
    let episodesArray = req.params.episode;
    episodesArray = episodesArray.split(/,/g);

    let episodes = await Episode.query()
      .where("id", "=", id)
      .fetch();

    return {
      id,
      episodes
    };
  }
}

module.exports = ShowController;
