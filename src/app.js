const express = require('express');
const app = express();
const router = require('./routes/index');
const connectDB = require('./routes/DataBase');

// Conectar a la base de datos
connectDB();

// Middleware para procesar JSON
app.use(express.json());

// Usar el router
app.use('/', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/',router);
