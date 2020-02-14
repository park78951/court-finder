'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    kakaoId: {
      type: DataTypes.STRING(16),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  
  User.associate = function(models) {
  };

  return User;
};