const express = require('express')
const response = require('../helpers/response')
const db = require('../models/index')
const user = express.Router()

user.get('/', async (req, res) => {
    const user = await db.User.findAll()
    
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