'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    text: {
      type: DataTypes.STRING(1600),
      allowNull: false
    },
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  
  Review.associate = function(models) {
    Review.belongsTo(models.Court, {
      foreignKey: 'courtId',
      target: 'id',
      as: 'court',
    });
    Review.belongsTo(models.User, {
      foreignKey: 'writerId',
      target: 'kakaoId',
      as: 'writer',
    });
  };

  return Review;
};