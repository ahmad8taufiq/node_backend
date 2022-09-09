const moment = require('moment')
const now = moment().unix()
const short = require('short-uuid')
const passport = require('passport')
const { google } = require('../config/oauth2')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const UserRepository = require('../repository/user')
const userRepo = new UserRepository

require('dotenv').config()

passport.use(new GoogleStrategy(google, async (accessToken, refreshToken, profile, done) => {
    if(profile.emails[0].verified) {
        const data = {
            id: short().generate(),
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