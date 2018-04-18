"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Episodes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      seasonNumber: {
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      synopsis: {
        type: Sequelize.TEXT
      },
      length: {
        type: Sequelize.INTEGER
      },
      airDate: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      showId: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal("NOW()")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal("NOW()")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Episodes");
  }
};
