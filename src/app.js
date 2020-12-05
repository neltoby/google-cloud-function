require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const getRoute = require('./getRoute')
const postRoute = require('./postRoute')
const putRoute = require('./putRoute')
const deleteRoute = require('./deleteRoute')
const cors = require('cors')
const app = express()

app.use(express.json())

app.get('/*', cors(), getRoute)
app.post('/*', cors(), postRoute)
app.put('/*', cors(), putRoute)
app.delete('/*', cors(), deleteRoute)

app.use('/*', (req, res) => {
    res.send('Sorry, we do not have a page here')
})

module.exports = app
