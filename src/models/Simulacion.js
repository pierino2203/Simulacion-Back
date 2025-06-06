const mongoose = require('mongoose');

const simulacionSchema = new mongoose.Schema({
    resultado: {
        type: String,
        required: true
    },
    temperatura: {
        type: String,
        required: true
    },
    mesSiembra: {
        type: String,
        required: true
    },
    humedad: {
        type: String,
        required: true
    },
    porcentajeAfectacion: {
        type: String,
        required: true
    },
    accionRecomendada: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Simulacion', simulacionSchema);