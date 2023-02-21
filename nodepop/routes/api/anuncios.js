var express = require('express');
var router = express.Router();
const Anuncio = require('../../models/Anuncio')
// Obtener todos
router.get("/", async function (req, res, next) {
    console.log('obtener todos');
    try {
        const anuncios = await Anuncio.find();
        res.json({ resultado: anuncios });

    } catch (error) {
        next(error);
    }
})


// poder crear un anuncio
router.post("/", async (req, res, next) => {

    // { articulo: 'iPhone 7 plus', tipo: 'Venta', precio: 200.22, imagen: 'iphone7plus.jpg', tags: 'mobile' },

    try {
        // const articulo = req.body.articulo;
        // const tipo = req.body.tipo;
        const anuncioBody = req.body;
        const anuncio = new Anuncio(anuncioBody);
        // Insertamos en BBDD
        const anuncioGuardado = await anuncio.save();
        res.json({
            resultado: 'Anuncio guardado correctamente',
            anuncio: anuncioGuardado
        });
    } catch (error) {
        // Marcamos el código de error
        error.status = 406;
        error.detail = "Es posible que los parámetros enviados no sean válidos."
        next(error);
    }
})


// lista de tags

module.exports = router;