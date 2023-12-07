const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");

const asignaturaSchema = new Schema({
    nombre: String,
    titulacion: String,
    profesores: [{type: mongoose.Types.ObjectId, ref:"Profesor"}]
});

module.exports = model('Asignatura', asignaturaSchema);