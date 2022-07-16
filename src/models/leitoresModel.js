const mongoose = require("mongoose")

const leitorSchema = mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contato: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
},{ timestamps: true})

const Model = mongoose.model('leitores', leitorSchema)

module.exports = Model