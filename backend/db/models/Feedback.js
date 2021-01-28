'use strict';
module.exports = (sequelize, DataTypes) => {
  const FeedBack = sequelize.define('FeedBack', {
    userId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER,
    feedback: DataTypes.TEXT
  }, {});
  FeedBack.associate = function(models) {
    FeedBack.belongsTo(models.Track, { foreignKey: 'trackId' })
    FeedBack.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return FeedBack;
};
