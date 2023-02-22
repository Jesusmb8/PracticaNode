const mongoose = require('mongoose');

// Creamos el esquema
const anuncioSchema = mongoose.Schema({
    articulo: String,
    venta: {
        type: Boolean,
        required: true
    },
    precio: Number,
    imagen: String,
    tags: {
        type: [String],
        enum: ['work', 'lifestyle', 'motor', 'mobile']
    },
})


// Creamos el método estático para la query
anuncioSchema.statics.query = function (criteria = {}, start, limit,sort) {

    const query = Anuncio.find(criteria);
    query.skip(start);
    query.limit(limit);
    query.sort(sort);

    return query.exec();
};
// Creamos el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);
// Exportamos el modelo
module.exports = Anuncio;