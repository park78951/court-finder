'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(60),
      },
      latitude: {
        type: Sequelize.DECIMAL(10.7),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.DECIMAL(10.7),
        allowNull: false,
      },
      district: {
        type: Sequelize.STRING(20),
      },
      address: {
        type: Sequelize.STRING(128),
      },
      isIndoor: {
        type: Sequelize.BOOLEAN
      },
      numberOfCourts: {
        type: Sequelize.INTEGER
      },
      web: {
        type: Sequelize.STRING(256),
      },
      parkingLot: {
        type: Sequelize.STRING(128),
      },
      phone: {
        type: Sequelize.STRING(20),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Courts');
  }
};