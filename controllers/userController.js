const bcrypt = require('bcrypt')
const express = require('express')
const moment = require('moment')
const shortUUID = require('short-uuid')
const UserSchema = require('../schemas/userSchema.js')
const { body, response } = require('../cores/response.js')
const UserRepository = require('../repository/userRepository.js')

require('dotenv').config()

const now = moment().unix()
const userRepo = new UserRepository

const user = express.Router()

user.post('/', async (req, res) => {
    try {
        const { error, value } = UserSchema.validate(req.body)
        if(error) throw response(res, 400, body(false, error.message, null))

        isUserUnique = await userRepo.isUserUnique(value.username, value.email)
        if(isUserUnique > 0) throw response(res, 200, body(false, 'username or email isExists', null))

        value.id = shortUUID().generate()
        value.password = await bcrypt.hash(value.password, process.env.TOKEN_SECRET).then((result) => result)
        value.createdAt = now
        value.createdBy = 'admin'
        value.updatedAt = now
        value.updatedBy = 'admin'

        await userRepo.create(value)

        return response(res, 201, body(true, 'Success', { id: value.id }))
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

module.exports = userController