const { Op } = require('sequelize')
const User = require ('../models/userModel.js')

class UserRepository {
    async create(data) {
        return await User.create(data)
    }

    async findOrCreate(id, data) {
        return await User.findOrCreate({
            where: { email: id },
            defaults: data,
        })
    }
    
    async gets() {
        return await User.findAll({
            attributes: { exclude: ['password'] },
        })
    }

    async get(id) {
        return await User.findByPk(id)
    }

    async isUserUnique(username, email) {
        return await User.count({
            where: {
                [Op.or]: [
                    { username },
                    { email }
                ]
            },
        })
    }
}

module.exports = UserRepository