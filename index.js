const express = require('express')
const app = express()
const cors = require('cors')
const api = require('./routes/api')

require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(api)

app.listen(3000, () => console.log(`app listening on port: http://localhost:${process.env.PORT}`))