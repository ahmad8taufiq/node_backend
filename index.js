import express from 'express'
import middleware from './cores/middleware.js'
import router from './cores/router.js'

const app = express()
middleware(express, app)
router(app)

app.listen(3000, () => console.log(`app listening on port: http://localhost:${process.env.PORT}`))