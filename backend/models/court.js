'use strict';
module.exports = (sequelize, DataTypes) => {
  const Court = sequelize.define('Court', {
    name: {
      type: DataTypes.STRING(60),
    },
    latitude: {
      type: DataTypes.DECIMAL(10.7),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(10.7),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(20),
    },
    district: {
      type: DataTypes.STRING(20),
    },
    address: {
      type: DataTypes.STRING(128),
    },
    isIndoor: {
      type: DataTypes.BOOLEAN
    },
    numberOfCourts: {
      type: DataTypes.INTEGER
    },
    web: {
      type: DataTypes.STRING(256),
    },
    parkingLot: {
      type: DataTypes.STRING(128),
    },
    phone: {
      type: DataTypes.STRING(20),
    },
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  
  Court.associate = function(models) {
  };
  return Court;
};