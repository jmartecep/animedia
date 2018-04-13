"use strict";

const Schema = use("Schema");

class EpisodesSchema extends Schema {
  up() {
    this.create("episodes", table => {
      table.increments();
      table.string("title");
      table.string("seasonNumber");
      table.string("number");
      table.text("synopsis");
      table.string("length");
      table.string("airDate");
      table.string("thumbnail");
      table.integer("showId");
      table.timestamps();
    });
  }

  down() {
    this.drop("episodes");
  }
}

module.exports = EpisodesSchema;
