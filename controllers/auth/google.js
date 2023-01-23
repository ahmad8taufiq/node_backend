const express = require('express')
const passport = require('passport')
const { googleIsAuthenticated, googleIsUnauthenticated } = require('../../middlewares/google')
const response = require('../../cores/response')

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

module.exports = googleController