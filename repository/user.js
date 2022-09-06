const User = require('../models/user')

class UserRepository {
    gets() {
        return User.findAll({
            attributes: { exclude: ['password'] },
        })
    }

    get(id) {
        return User.findByPk(id)
    }
}

module.exports = UserRepository