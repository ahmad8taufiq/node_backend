const { DataTypes, sequelize } = require('../config/database')

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
  },
  phone: {
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
}, {});

module.exports = User