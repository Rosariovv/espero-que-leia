require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const leitorRoutes = require('./routes/leitoresRouter')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(leitorRoutes)

module.exports = app
