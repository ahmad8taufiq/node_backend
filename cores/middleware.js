const cors = require('cors')
const moment = require('moment')
const passport = require('passport')
const shortUUID = require('short-uuid')
const session = require('express-session')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const UserRepository = require('../repository/userRepository.js')
const expressStatusMonitor = require('express-status-monitor')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const googleCredential = require('../config/oauth2.js')

const middleware = (express, app) => {
    app.use(cors())
    app.use(compression())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser())
    app.use(expressStatusMonitor())

    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: 'SECRET',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 3,
        },
        // cookie: { secure: true }
    
    }))

    const now = moment().unix()
    const userRepo = new UserRepository

    passport.use(new GoogleStrategy(googleCredential, async (accessToken, refreshToken, profile, done) => {
        if(profile.emails[0].verified) {
            const data = {
                id: shortUUID().generate(),
                name: profile.displayName,
                username: null,
                phone: null,
                form: 'google',
                email: profile.emails[0].value,
                password: null,
                createdAt: now,
                createdBy: 'system',
                updatedAt: now,
                updatedBy: 'system'
            }
    
            const [user, _] = await userRepo.findOrCreate(data.email, data)
            if(user.email) {
                return done(null, profile)
            }
        }
    }))
    
    passport.serializeUser(function(user, done) {
        done(null, user)
    });
      
    passport.deserializeUser(function(user, done) {
        done(null, user)
    });

    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = middleware