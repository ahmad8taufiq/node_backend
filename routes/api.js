import express from 'express'
import userController from '../controllers/userController.js';
import googleController from '../controllers/auth/googleController.js';

const api = express.Router()

api.use('/api', googleController)
api.use('/api', userController)

export default api