const LeitoresModel = require("../models/leitoresModel")


const createLeitor = async (req, res) => {
    try {
        const { nome, email, contato, descricao } = req.body

        const newLeitor = new LeitoresModel({
            nome, email, contato, descricao
        })

        const savedLeitor = await newLeitor.save()

        res.status(201).json({
            "message": "leitor cadastrado",
            "code": "SUCCESS",
            "data": newLeitor
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            "message": error.message,
            "code": "INTERNAL_SERVER_ERROR",
            "data": null

        })
    }
}

const findAllLeitores = async (req, res) => {
    try {
        const allLeitores = await LeitoresModel.find()
        res.status(200).json({
            "message": "leitores encontrados",
            "code": "SUCCESS",
            "data": allLeitores
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            "message": error.message,
            "code": "INTERNAL_SERVER_ERROR",
            "data": null
        })
    }
}

const updateLeitor = async (req, res) => {
    try {
        const { nome, email, contato, descricao  } = req.body
        const updateLeitores = await LeitoresModel
            .findByIdAndUpdate(req.params.id, {
                nome, email, contato, descricao 
            })
        res.status(200).json({
            "message": "leitor atualizado",
            "code": "SUCCESS",
            "data": updateLeitores
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            "message": error.message,
            "code": "INTERNAL_SERVER_ERROR",
            "data": null
        })
    }
}

module.exports = {
    createLeitor,
    findAllLeitores,
    updateLeitor
}