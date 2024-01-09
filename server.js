// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/weatherDB", {
  useNewUrlParser: true,
}).catch((err)=> console.log(err))

app.use('/weather', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})