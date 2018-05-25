'use strict';
module.exports = (sequelize, DataTypes) => {
  var Spaces = sequelize.define('Spaces', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    // allowNull: false
  }, {});
  Spaces.associate = function(models) {
    // associations can be defined here
  };
  return Spaces;
};
