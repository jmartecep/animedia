'use strict';
module.exports = (sequelize, DataTypes) => {
  var Genre = sequelize.define('Genre', {
    title: DataTypes.STRING //from schema
  }, {});
  Genre.associate = function (models) {
    // associations can be defined here
  };
  return Genre;
};