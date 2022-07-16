const leitoresModel = require("../models/leitoresModel")


const createLeitor = async (req, res) => {
    try {
        const { nome, cep, email, contato, descricao } = req.body

        const newLeitor = new leitoresModel({
            nome, cep, email, contato, descricao
        })

        const savedLeitor = await newLeitor.save()

        res.status(201).json({
            "message": "leitor cadastrado",
            "code": "SUCCESS",
            "data": null
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
    createLeitor
}