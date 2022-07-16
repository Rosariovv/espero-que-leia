const controller = require('../controller/leitoresController')
const express = require('express')

const router = express.Router()

router.post("/leitor", controller.createLeitor)








module.exports = router