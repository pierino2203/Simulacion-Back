const { Router } = require('express');
const routerHola = require('./routerHola');
const router = Router();

router.use('/hola', routerHola);

module.exports = router;