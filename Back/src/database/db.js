const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.set('strictQuery', false)

module.exports = () => mongoose.connect(config.uri)
    .then(() => console.log('Conectado a mongodb'))
    .catch((err) => console.log('error de conexion',err))