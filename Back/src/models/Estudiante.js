const mongoose = require('mongoose');

const EstudianteSchema = mongoose.Schema({
    nombre: String,
    edad: Number,
    grado: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);