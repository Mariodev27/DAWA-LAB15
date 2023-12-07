const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");

const profesorSchema = new Schema({
    nombre: String,
    departamento: String,
    asignaturas: [{type: mongoose.Types.ObjectId, ref:"Asignatura"}]
});

module.exports = model('Profesor', profesorSchema);