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
        type: Sequelize.DECIMAL(10,7),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.DECIMAL(10,7),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(20),
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
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null
      }
    }, {
      timestamps: true,
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Courts');
  }
};