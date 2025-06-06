const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index');
const connectDB = require('./DataBase');

// Conectar a la base de datos
connectDB();

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// Middleware para procesar JSON
app.use(express.json());

// Usar el router
app.use('/', router);

// Exportar app en lugar de levantar un servidor
module.exports = app;
