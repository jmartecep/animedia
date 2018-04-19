'use strict';
module.exports = (sequelize, DataTypes) => {
  var Episode = sequelize.define('Episode', {
    title: DataTypes.STRING,
    showId: DataTypes.INTEGER,
    seasonNumber: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    synopsis: DataTypes.TEXT,
    length: DataTypes.INTEGER,
    airDate: DataTypes.STRING,
    thumbnail: DataTypes.STRING
  }, {
      underscored: true
    });
  Episode.associate = function (models) {
    // associations can be defined here
  };
  return Episode;
};