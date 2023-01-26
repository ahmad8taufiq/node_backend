import express from 'express'
import response from '../cores/response.js'
import UserRepository from '../repository/user.js'

const userRepo = new UserRepository

const user = express.Router()

user.get('/', async (req, res) => {
    // const user = await db.User.findAll()
    const user = await userRepo.gets() 

    const body = {
        success: true,
        message: '',
        data: user,
    }
    
    return response(res, body)
})

user.get('/:id', async (req, res) => {
    const user = await userRepo.get(req.params.id) 

    const body = {
        success: true,
        message: '',
        data: user,
    }
    
    return response(res, body)
})

const userController = express.Router()
userController.use('/users', user)

export default userController