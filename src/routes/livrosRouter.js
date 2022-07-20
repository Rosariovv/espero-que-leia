const controller = require('../controller/livrosController')
const express = require('express')

const router = express.Router()

router.post("/", controller.createLivro)
router.get("/", controller.findAllLivros)
router.patch("/:id", controller.updateLivro)

module.exports = router