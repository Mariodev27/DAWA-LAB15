// Importa el modelo de Estudiante
const Estudiante = require('../models/Estudiante');

// Controlador para obtener todos los estudiantes
exports.getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al obtener los estudiantes."
        });
    }
};

// Aquí puedes agregar más funciones para manejar las demás rutas (crear, actualizar, eliminar, etc.)