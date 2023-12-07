const { Schema, model } = require('mongoose');

const socioSchema = new Schema({
    nombre: String,
    apellido: String,
    matricula: String,
    titulacion: String,
    asignaturas: [{type: mongoose.Types.ObjectId, ref:"Asignatura"}]
});

module.exports = model('Socio', socioSchema);