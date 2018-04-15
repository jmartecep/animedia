"use strict";

const Schema = use("Schema");

class ShowsSchema extends Schema {
  up() {
    this.create("shows", table => {
      table.increments();
      table.string("title").unique();
      table.text("description");
      table.string("averageRating");
      table.string("startDate");
      table.string("endDate");
      table.string("ageRating");
      table.string("airedOn");
      table.string("ratingRank");
      table.string("poster");
      table.string("coverImage");
      table.string("genres");
      table.string("youtubeTrailerId");
      table.timestamps();
    });
  }

  down() {
    this.table("shows", table => {
      this.drop("shows");
    });
  }
}

module.exports = ShowsSchema;
