const express = require('express')
const app = express()
const router = require('./cores/router')
const middleware = require('./cores/middleware')

require('dotenv').config()

middleware(express, app)
router(app)

app.listen(3000, () => console.log(`app listening on port: http://localhost:${process.env.PORT}`))