const express = require('express')
const userController = require('../controllers/userController.js')
const googleController = require('../controllers/auth/googleController.js')

const api = express.Router()

api.use('/api', googleController)
api.use('/api', userController)

module.exports = api