const mongoose = require("mongoose")

const livroSchema = mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    estilo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
},{ timestamps: true})

const Model = mongoose.model('livros', livroSchema)

module.exports = Model
