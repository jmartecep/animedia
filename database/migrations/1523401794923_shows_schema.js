"use strict";

const Schema = use("Schema");

class ShowsSchema extends Schema {
  up() {
    this.create("shows", table => {
      table.increments();
      table.string("title").unique();
      table.string("description");
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
