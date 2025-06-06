const express = require('express');
const router = express.Router();
const { guardarSimulacion, obtenerSimulaciones } = require('../Controllers/SimulacionController');

// Ruta para guardar una simulación
router.post('/', guardarSimulacion);

// Ruta para obtener todas las simulaciones
router.get('/', obtenerSimulaciones);
module.exports = router; 