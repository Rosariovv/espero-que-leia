const controller = require('../controller/leitoresController')
const express = require('express')

const router = express.Router()

router.post("/", controller.createLeitor)
router.get("/", controller.findAllLeitores)
router.get("/:id", controller.findLeitorById)
router.patch("/:id", controller.updateLeitor)
router.delete("/:id", controller.deleteLeitor)

module.exports = router