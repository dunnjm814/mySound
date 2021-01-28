'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    source: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    trackImg: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
  }, {});
  Track.associate = function(models) {
    Track.belongsTo(models.User, { foreignKey: 'userId' })
    Track.hasMany(models.FeedBack, {foreignKey: 'trackId'})
  };
  return Track;
};
