const express = require('express')
const response = require('../helpers/response')
const user = express.Router()

user.get('/', (req, res) => {
    const body = {
        success: true,
        message: 'UserController: Hello world',
        data: null,
    }
    
    return response(res, body)
})

const userController = express.Router()
userController.use('/users', user)

module.exports = userController