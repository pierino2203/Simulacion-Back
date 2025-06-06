const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if(!email || !password) {
            return res.status(400).json({ message: 'Email y contraseña son requeridos' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const validPassword = await user.validatePassword(password);
        if(!validPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ auth: true, token });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
};

const register = async (req, res) => {
    try {
        console.log('Iniciando registro de usuario...');
        console.log('Datos recibidos:', req.body);
        console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Definido' : 'No definido');
        
        const { email, password } = req.body;
        
        if (!email || !password) {
            console.log('Faltan datos requeridos');
            return res.status(400).json({ message: 'Email y contraseña son requeridos' });
        }

        console.log('Buscando usuario existente...');
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('Usuario ya existe');
            return res.status(400).json({ message: 'Usuario ya existe' });
        }

        console.log('Creando nuevo usuario...');
        const newUser = new User({ email, password });
        
        console.log('Guardando usuario...');
        await newUser.save();
        console.log('Usuario guardado exitosamente');
        
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET no está definido en las variables de entorno');
        }

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Token generado exitosamente');
        
        res.status(201).json({ 
            message: 'Usuario creado correctamente',
            token,
            user: {
                id: newUser._id,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error('Error detallado en registro:', error);
        console.error('Stack trace:', error.stack);
        res.status(500).json({ 
            message: 'Error en el servidor', 
            error: error.message,
            stack: error.stack 
        });
    }
};

module.exports = {
    login,
    register
};