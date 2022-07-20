const controller = require('../controller/leitoresController')
const express = require('express')

const router = express.Router()

router.post("/", controller.createLeitor)
router.get("/", controller.findAllLeitores)
router.patch("/:id", controller.findAllLeitores)

module.exports = router