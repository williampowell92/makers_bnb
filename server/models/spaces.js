'use strict';
module.exports = (sequelize, DataTypes) => {
  var Spaces = sequelize.define('Spaces', {
    name: DataTypes.TEXT,
    fromDate: DataTypes.DATEONLY,
    toDate: DataTypes.DATEONLY
    // allowNull: false
  }, {});
  Spaces.associate = function(models) {
    // associations can be defined here
  };
  return Spaces;
};
