import Joi from "joi"

const UserSchema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(10).required(),
    email: Joi.string().email(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    repeatPassword: Joi.ref('password'),
})

export default UserSchema