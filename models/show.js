"use strict";
module.exports = (sequelize, DataTypes) => {
  var Show = sequelize.define(
    "Show", //from schema
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      averageRating: DataTypes.INTEGER,
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
      ageRating: DataTypes.STRING,
      airedOn: DataTypes.STRING,
      ratingRank: DataTypes.STRING,
      poster: DataTypes.STRING,
      coverImage: DataTypes.STRING,
      genres: DataTypes.STRING,
      youtubeTrailerId: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  Show.associate = function (models) {
    // associations can be defined here
  };
  return Show;
};
