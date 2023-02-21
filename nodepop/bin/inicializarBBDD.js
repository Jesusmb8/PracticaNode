'use strict';

const Anuncio = require('../models/Anuncio');
const connection = require('../lib/connectMongoose');

main().catch(err => {
  console.log('Hubo un error', err);
  connection.close()
}
);

async function main() {

  // inicializamos colección de agentes
  await inicializarAnuncios();

  connection.close();

}

async function inicializarAnuncios() {
  // borrar todos los documentos de la colección de agentes
  const deleted = await Anuncio.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} anuncios.`);

  // crear agentes iniciales
  const inserted = await Anuncio.insertMany([
    { articulo: 'iPhone 7 plus', venta: true, precio: 200.22, imagen: 'iphone7plus.jpg', tags: 'mobile' },
    { articulo: 'iPhone 13', venta: true, precio: 800.32, imagen: 'iphone13.jpg', tags: 'mobile' },
    { articulo: 'iPhone 14', venta: false, precio: 999.99, imagen: 'iphone14.jpg', tags: 'mobile' },
    { articulo: 'Bmw serie 4', venta: false, precio: 10000, imagen: 'bmwS4.jpg', tags: ['motor','work'] },
    { articulo: 'Bmw serie X4',venta: true, precio: 23000, imagen: 'bmwX4.jpg', tags: ['motor','work'] },
    { articulo: 'Mercedes CLA',venta: true, precio: 26000, imagen: 'mercedesCLA.jpg', tags: ['motor','work'] },
    { articulo: 'Nike Jordan', venta: true, precio: 100, imagen: 'nikeJordan.jpg', tags: 'lifestyle' },
  ]);
  console.log(`Creados ${inserted.length} anuncios`);
}

