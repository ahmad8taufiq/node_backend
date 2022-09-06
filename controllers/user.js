const express = require('express')
const response = require('../helpers/response')
// const db = require('../models/index')
const UserRepository = require('../repository/user')
const user = express.Router()

const userRepo = new UserRepository

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

module.exports = userController