import express from 'express'
import passport from 'passport'
import {
    googleIsAuthenticated,
    googleIsUnauthenticated }
from '../../middlewares/googleMiddleware.js'
import response from '../../cores/response.js'

const google = express.Router()

google.get('/login', passport.authenticate('google', { scope: ['email', 'profile']}))

google.get('/logout', googleIsUnauthenticated, (req, res) => {
    req.session = null;
    res.redirect('https://accounts.google.com/logout');
})

google.get('/callback', passport.authenticate('google', {
    successReturnToOrRedirect: '/api/google/success',
    failureRedirect: '/api/google/failed'
}))

google.get("/success", googleIsAuthenticated, (req, res) => {
    console.log({ user: req.user })
    res.json({isAuthencticated: req.isAuthenticated(), isUnauthenticated: req.isUnauthenticated()});
})

google.get('/failed', async (req, res) => {
    const body = {
        success: false,
        message: 'Unauthenticated',
        data: null,
    }
    
    return response(res, body)
})

const googleController = express.Router()
googleController.use('/google', google)

export default googleController