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
      .whereIn("id", id)
      .fetch();

    return show;
  }

  async episodes(req) {
    let id = req.params.episode;

    let episodes = await Episode.all();
    return episodes;
  }

  async episodesSingle(req) {
    let id = req.params.episode;

    let episode = await Episode.query()
      .where("id", "=", id)
      .fetch();

    return {
      id,
      episode
    };
  }

  async episodesWhere(req) {
    let id = req.params.episodes;
    id = id.split(/,/g);

    let episode = await Episode.query()
      .whereIn("id", id)
      .fetch();

    return {
      id,
      episode
    };
  }
}

module.exports = ShowController;
