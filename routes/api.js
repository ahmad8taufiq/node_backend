import express from 'express'
import userController from '../controllers/user.js';
import googleController from '../controllers/auth/google.js';

const api = express.Router()

api.use('/api', googleController)
api.use('/api', userController)

export default api