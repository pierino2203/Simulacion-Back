const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://pierino2203:Ummanestor2203@cluster0.njdkceh.mongodb.net/');
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Terminar la aplicación si no se puede conectar a la base de datos
    }
};

module.exports = connectDB;