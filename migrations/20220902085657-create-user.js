'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      form: {
        type: Sequelize.ENUM,
        values: ['form', 'google'],
        defaultValue: 'form',
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      deletedAt: {
        type: Sequelize.INTEGER,
      },
      deletedBy: {
        type: Sequelize.STRING,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};