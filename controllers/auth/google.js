const express = require('express')
const passport = require('passport');
const { googleIsAuthenticated, googleIsUnauthenticated } = require('../../middlewares/google')
const response = require('../../cores/response')

const google = express.Router()

google.get('/login', passport.authenticate('google', { scope: ['email', 'profile']}))

google.get('/logout', googleIsUnauthenticated, (req, res) => {
    req.session.destroy(function(err) {
        if(!err) {
            res.redirect('/')
        }
    })
})

google.get('/callback', passport.authenticate('google', { failureRedirect: '/failed' }), (req, res) => {
    res.redirect('/api/google/success')
})

google.get("/success", googleIsAuthenticated, (req, res) => {
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