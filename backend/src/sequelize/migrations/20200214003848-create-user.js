'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      kakaoId: {
        type: Sequelize.STRING(16),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      nickname: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null
      }
    },
    {
      timestamps: true,
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};