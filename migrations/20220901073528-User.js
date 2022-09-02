'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.DataTypes.STRING,
      phone: Sequelize.DataTypes.STRING,
      email: Sequelize.DataTypes.STRING,
      password: Sequelize.DataTypes.STRING,
      createdAt: Sequelize.DataTypes.INTEGER,
      createdBy: Sequelize.DataTypes.STRING,
      updatedAt: Sequelize.DataTypes.INTEGER,
      updatedBy: Sequelize.DataTypes.STRING,
      deletedAt: Sequelize.DataTypes.INTEGER,
      deletedBy: Sequelize.DataTypes.STRING
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('users');
  }
};
