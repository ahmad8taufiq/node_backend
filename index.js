const express = require('express')
const middleware = require('./cores/middleware.js')
const router = require('./cores/router.js')

const app = express()
middleware(express, app)
router(app)

app.listen(3000, () => console.log(`app listening on port: http://localhost:${process.env.PORT}`))