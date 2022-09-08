'use strict';

const { DataTypes, Sequelize } = require('sequelize');

require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
    port: parseInt(process.env.DB_PORT),
    logging: false,
});

module.exports = { DataTypes, Sequelize, sequelize }