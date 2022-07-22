const controller = require('../controller/livrosController')
const express = require('express')

const router = express.Router()

router.post("/", controller.createLivro)
router.get("/", controller.findAllLivros)
router.get("/:id", controller.findLivroById)
router.patch("/:id", controller.updateLivro)
router.delete("/:id", controller.deleteLivro)

module.exports = router