import express from 'express'
import { body, response } from '../cores/response.js'
import UserSchema from '../schemas/userSchema.js'
import UserRepository from '../repository/userRepository.js'

const userRepo = new UserRepository

const user = express.Router()

user.post('/', async (req, res) => {
    try {
        const { error, value } = UserSchema.validate(req.body)
        if(error) {
            throw response(res, 400, body(false, 400, null))
        }
        response(res, 201, null)
    } catch(err) {
        return err
    }
})

user.get('/', async (req, res) => {
    // const user = await db.User.findAll()
    const user = await userRepo.gets() 
    return response(res, 200, body(true, 200, user))
})

user.get('/:id', async (req, res) => {
    const user = await userRepo.get(req.params.id) 
    return response(res, 200, body(true, '', user))
})

const userController = express.Router()
userController.use('/users', user)

export default userController