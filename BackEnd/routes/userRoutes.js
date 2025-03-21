// Importación de librerías necesarias y controladores
const express = require('express');
const { createUser, userSignIn, checkUser, updateUserById } = require('../controllers/userController');
const auth = require('../middleware/authorization');

const userRouter = express.Router();

// Rutas de sesión
userRouter.post('/registro', createUser);
userRouter.post('/iniciar-sesion', userSignIn);
userRouter.get('/verificar-usuario', auth, checkUser);
userRouter.put('/actualizar-usuario/:id', updateUserById);

// Exportación de rutas
module.exports = userRouter