const express = require('express')
const userController = require('../controllers/user')
const googleController = require('../controllers/auth/google')

const api = express.Router()
api.use('/api', googleController)
api.use('/api', userController)

module.exports = api