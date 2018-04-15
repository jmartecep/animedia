"use strict";

const Schema = use("Schema");

class GenresSchema extends Schema {
  up() {
    this.create("genres", table => {
      table.increments();
      table.string("title").unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("genres");
  }
}

module.exports = GenresSchema;
