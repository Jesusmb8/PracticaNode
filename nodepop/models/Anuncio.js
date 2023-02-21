const mongoose = require('mongoose');

// Creamos el esquema
const anuncioSchema = mongoose.Schema({
    articulo: String,
    venta: { 
        type: Boolean, 
        required:true
    },
    precio: Number,
    imagen: String,
    tags:{ 
        type: [String], 
        enum: ['work', 'lifestyle','motor','mobile'] 
    },
})

// Creamos el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);
// Exportamos el modelo
module.exports = Anuncio;