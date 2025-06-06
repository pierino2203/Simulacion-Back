const express = require('express');
const router = express.Router();
const { guardarSimulacion, obtenerSimulaciones } = require('../Controllers/SimulacionController');

router.get('/', router.get('/', obtenerSimulaciones));

module.exports = router;