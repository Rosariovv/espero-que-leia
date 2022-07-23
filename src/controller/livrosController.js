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

const findLivroById = async (req, res) => {
    try {
      const findLivro = await LivrosModel.findById(req.params.id)
      if(!findLivro) {
        return res.status(404).json({message:"id não encontrado"})
      }
      res.status(200).json(findLivro)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
 }

const updateLivro = async (req, res) => {
    try {
        const { titulo, autor, tipo, estilo, status, descricao, pontoDeEntrega } = req.body

        const livrosUpdate = await LivrosModel
            .findByIdAndUpdate(req.params.id)
            if(!livrosUpdate) {
                return res.status(404).json({message:"id não encontrado"})
              }

        const updateLivros = await LivrosModel
            .findByIdAndUpdate(req.params.id, {
                titulo, autor, tipo, estilo, status, descricao, pontoDeEntrega
            })

        res.status(200).json({
            "message": "livro atualizado",
            "code": "SUCCESS",
            "data": livrosUpdate
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

const deleteLivro = async (req, res) => {
    try {
        const { id } = req.params
        const deletedLivro = await LivrosModel.findByIdAndDelete(id) 
        if(!deletedLivro) {
            return res.status(404).json({message:"id não encontrado"})
          }
        const message = `O livro: ${deletedLivro.titulo} foi deletado com sucesso!`
       res.status(200).json({ message })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
 }

module.exports = {
    createLivro,
    findAllLivros,
    findLivroById,
    updateLivro,
    deleteLivro
}