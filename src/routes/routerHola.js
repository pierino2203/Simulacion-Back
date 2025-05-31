const { Router } = require('express');

const routerHola = Router();

routerHola.get('/', (req, res) => {
    res.send('¡Hola desde Node.js!');
});

module.exports = routerHola;