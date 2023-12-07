const express = require('express');
const router = express.Router();

// Importa el controlador de estudiantes
const estudianteController = require('../controllers/estudianteController');

// Ruta para obtener todos los estudiantes
router.get('/estudiantes', estudianteController.getEstudiantes);

// Aquí puedes agregar más rutas para las demás funciones del controlador (crear, actualizar, eliminar, etc.)

module.exports = router;