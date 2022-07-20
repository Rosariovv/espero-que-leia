require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("./database/mongooseConnect")
const leitorRoutes = require('./routes/leitoresRouter')
const livroRoutes = require('./routes/livrosRouter')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use("/leitor",leitorRoutes)
app.use("/livro",livroRoutes)

module.exports = app
