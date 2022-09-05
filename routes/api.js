const express = require('express')
const userController = require('../controllers/user')

const api = express.Router()
api.use('/api', userController)

module.exports = api