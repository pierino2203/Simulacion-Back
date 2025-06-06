const express = require('express');
const router = express.Router();
const routerHola = require('./routerHola');
const userRoutes = require('./userRoutes');
const simulacionRoutes = require('./simulacionRoutes');

router.use('/hola', routerHola);
router.use('/user', userRoutes);
router.use('/simulacion', simulacionRoutes);

module.exports = router