import User from '../models/userModel.js'

class UserRepository {
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
}

export default UserRepository