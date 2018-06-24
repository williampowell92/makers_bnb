module.exports = (sequelize, DataTypes) => {
  const Spaces = sequelize.define('Spaces', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    fromDate: DataTypes.DATEONLY,
    toDate: DataTypes.DATEONLY
  }, {});
  return Spaces;
};
