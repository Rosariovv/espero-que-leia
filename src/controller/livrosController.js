const LivrosModel = require("../models/livrosModel")


const createLivro = async (req, res) => {
    try {
        const { titulo, autor, tipo, estilo, status, descricao, pontoDeEntrega } = req.body

        const newLivro = new LivrosModel({
            titulo, autor, tipo, estilo, status, descricao, pontoDeEntrega
        })

        const savedLivro = await newLivro.save()

        res.status(201).json({
            "message": "livro cadastrado",
            "code": "SUCCESS",
            "data": savedLivro
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

const findAllLivros = async (req, res) => {
    try {
        const allLivros = await LivrosModel.find()
        res.status(200).json({
            "message": "livros encontrados",
            "code": "SUCCESS",
            "data": allLivros
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

const updateLivro = async (req, res) => {
    try {
        const { titulo, autor, tipo, estilo, status, descricao, pontoDeEntrega } = req.body
        const updateLivros = await LivrosModel
            .findByIdAndUpdate(req.params.id, {
                titulo, autor, tipo, estilo, status, descricao, pontoDeEntrega
            })
        res.status(200).json({
            "message": "livro atualizado",
            "code": "SUCCESS",
            "data": updateLivros
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
    createLivro,
    findAllLivros,
    updateLivro
}