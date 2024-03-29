const { DataTypes } = require('sequelize')
const sequelize = require('../config/database.js')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  form: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.INTEGER,
  },
  createdBy: {
    type: DataTypes.STRING,
  },
  updatedAt: {
    type: DataTypes.INTEGER,
  },
  updatedBy: {
    type: DataTypes.STRING,
  },
}, { timestamps: false });

module.exports = User