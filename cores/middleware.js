import cors from 'cors'
import moment from 'moment'
import passport from 'passport'
import shortUUID from 'short-uuid'
import session from 'express-session'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import UserRepository from '../repository/userRepository.js'
import expressStatusMonitor from 'express-status-monitor'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import googleCredential from '../config/oauth2.js'

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

export default middleware