const mongoose = require('mongoose');

const simulacionSchema = new mongoose.Schema({
    tipoDanio: {
        type: String,
        required: true
    },
    porcentaje: {
        type: String,
        required: true
    },
    recomendacion: {
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