const moment = require('moment')
const now = moment().unix()
const short = require('short-uuid')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const UserRepository = require('../repository/user')
const userRepo = new UserRepository

require('dotenv').config()

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
},
async (accessToken, refreshToken, profile, done) => {
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
