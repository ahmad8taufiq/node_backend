const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello world'))

app.listen(3000, () => console.log(`app listening on port: http://localhost:3000`))