'use strict';
module.exports = (sequelize, DataTypes) => {
  var Episode = sequelize.define('Episode', {
    title: DataTypes.STRING
  }, {});
  Episode.associate = function(models) {
    // associations can be defined here
  };
  return Episode;
};