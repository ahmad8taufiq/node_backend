const express = require('express')
const userController = require('../controllers/user')
const googleController = require('../controllers/auth/google')

require('express-router-group');

const api = express.Router()

api.group('/api', router => {
    router.use(googleController)
    router.use(userController)
})

module.exports = api