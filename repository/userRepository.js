import User from '../models/userModel.js'

class UserRepository {
    findOrCreate(id, data) {
        return User.findOrCreate({
            where: { email: id },
            defaults: data,
        })
    }
    
    gets() {
        return User.findAll({
            attributes: { exclude: ['password'] },
        })
    }

    get(id) {
        return User.findByPk(id)
    }
}

export default UserRepository