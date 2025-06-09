const Simulacion = require('../models/Simulacion');

// Guardar una nueva simulación
const guardarSimulacion = async (req, res) => {
    try {
        const {
            tipoDanio,
            porcentaje,
            recomendacion
        } = req.body;

        // Crear nueva simulación
        const nuevaSimulacion = new Simulacion({
            tipoDanio,
            porcentaje,
            recomendacion
        });

        // Guardar en la base de datos
        const simulacionGuardada = await nuevaSimulacion.save();

        res.status(201).json({
            success: true,
            message: 'Simulación guardada correctamente',
            data: simulacionGuardada
        });

    } catch (error) {
        console.error('Error al guardar la simulación:', error);
        res.status(500).json({
            success: false,
            message: 'Error al guardar la simulación',
            error: error.message
        });
    }
};

// Obtener todas las simulaciones
const obtenerSimulaciones = async (req, res) => {
    try {
        const simulaciones = await Simulacion.find().sort({ createdAt: -1 });

        if (simulaciones.length === 0) {
            return res.status(200).json({
                success: true,
                message: 'No hay simulaciones registradas',
                data: []
            });
        }

        res.status(200).json({
            success: true,
            message: 'Simulaciones obtenidas correctamente',
            data: simulaciones
        });

    } catch (error) {
        console.error('Error al obtener las simulaciones:', error);
        res.status(500).json({
            success: false,
            message: 'Error al obtener las simulaciones',
            error: error.message
        });
    }
};

module.exports = {
    guardarSimulacion,
    obtenerSimulaciones
};
