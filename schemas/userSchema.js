const Joi = require('joi')

const UserSchema = Joi.object({
    name: Joi.string().min(3).required(),
    username: Joi.string().min(3).required(),
    phone: Joi.string().min(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

module.exports = UserSchema