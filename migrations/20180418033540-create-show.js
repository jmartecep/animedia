"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Shows", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      averageRating: {
        type: Sequelize.INTEGER
      },
      startDate: {
        type: Sequelize.STRING
      },
      endDate: {
        type: Sequelize.STRING
      },
      ageRating: {
        type: Sequelize.STRING
      },
      airedOn: {
        type: Sequelize.STRING
      },
      ratingRank: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      coverImage: {
        type: Sequelize.STRING
      },
      genres: {
        type: Sequelize.STRING
      },
      youtubeTrailerId: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(3)")
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal(
          "CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
        )
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Shows");
  }
};
