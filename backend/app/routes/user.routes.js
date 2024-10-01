module.exports = (app) => {
     const express = require('express');
     const router = express.Router();
     const userController = require('../controllers/user.controller');
     const verifyJWT = require('../middleware/verifyJWT');

     // Authentication
     router.post('/users/login', userController.userLogin);

     // Registration
     router.post('/users', userController.registerUser);

     // Get Current User
     router.get('/user', verifyJWT, userController.getCurrentUser);

     // Update User
     router.put('/user', verifyJWT, userController.updateUser);

     // Usar el router
     app.use('/api', router);
}
