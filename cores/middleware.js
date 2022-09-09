const cors = require('cors')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const compression = require('compression')
const expressStatusMonitor = require('express-status-monitor')
require('../middlewares/passport')

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

    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = middleware