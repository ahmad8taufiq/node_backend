'use strict';
const moment = require('moment')
const now = moment().unix()
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [{
    name: 'Ahmad',
    phone: '08123456789',
    email: 'ahmad@gmail.com',
    password: 'password',
    createdAt: now,
    createdBy: 'system',
    updatedAt: now,
    updatedBy: 'system',
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, { truncate: true});
  }
};
