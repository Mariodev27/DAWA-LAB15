const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");

const prestamoSchema = new Schema({
    fecha: Date,
    cinta: {type: mongoose.Types.ObjectId, ref:"Cinta"},
    socio: {type: mongoose.Types.ObjectId, ref:"Socio"},
    devuelta: Boolean
});

module.exports = model('Prestamo', prestamoSchema);