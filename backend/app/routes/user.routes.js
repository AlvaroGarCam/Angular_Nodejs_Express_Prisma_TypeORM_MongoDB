const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyJWT, logoutUser } = require('../middleware/verifyJWT');

// Authentication
router.post('/users/login', userController.userLogin);

// Logout
router.post('/users/logout', logoutUser);

// Registration
router.post('/users/register', userController.registerUser);

// Get Current User
router.get('/user', verifyJWT, userController.getCurrentUser);

// Update User
router.put('/user', verifyJWT, userController.updateUser);

// Profile User
router.get('/user/profile', verifyJWT, userController.getProfileUser);

module.exports = router;