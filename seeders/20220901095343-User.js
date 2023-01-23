'use strict';
const short = require('short-uuid');
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
    id: short().generate(),
    name: 'Ahmad',
    phone: '08123456789',
    form: 'form',
    email: 'ahmadtaufiq879@gmail.com',
    password: '$2a$12$RWqAKmzNclytlb5Buk95seRryN3fX4.jIlKBzNPlKf5qqIqTZt5Xu',
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
