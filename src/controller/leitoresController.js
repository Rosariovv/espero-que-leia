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

const findLeitorById = async (req, res) => {
    try {
        const findLeitor = await LeitoresModel.findById(req.params.id)
        if(!findLeitor) {
            return res.status(404).json({message:"id não encontrado"})
          }
        res.status(200).json(findLeitor)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateLeitor = async (req, res) => {
    try {
        const { nome, email, contato, descricao } = req.body

        const updateLeitores = await LeitoresModel
            .findByIdAndUpdate(req.params.id, {
                nome, email, contato, descricao
            })
        const leitoresUpdate = await LeitoresModel
        .findByIdAndUpdate(req.params.id)
        if(!leitoresUpdate) {
            return res.status(404).json({message:"id não encontrado"})
          }

        res.status(200).json({
            "message": "leitor atualizado",
            "code": "SUCCESS",
            "data": leitoresUpdate
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

const deleteLeitor = async (req, res) => {
    try {
        const { id } = req.params
        const deletedLeitor = await LeitoresModel.findByIdAndDelete(id)
        if(!deletedLeitor) {
            return res.status(404).json({message:"id não encontrado"})
          }
        const message = `O leitor: ${deletedLeitor.nome} foi deletado com sucesso!`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createLeitor,
    findAllLeitores,
    findLeitorById,
    updateLeitor,
    deleteLeitor
}