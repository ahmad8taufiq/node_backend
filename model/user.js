'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    form: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedAt: DataTypes.INTEGER,
    updatedBy: DataTypes.STRING,
    deletedAt: DataTypes.INTEGER,
    deletedBy: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};