const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyJWT, logoutUser } = require('../middleware/verifyJWT');
const { applyToJob } = require("../controllers/application.controller.js");
const updateApplicationStatus = require("../controllers/updateStatus.controller.js");
const verifyJWTOptional = require("../middleware/verifyJWTOptional");
const followCompany = require("../controllers/follow.controller");


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

//Apply to Job
router.post("/user/apply", verifyJWTOptional, applyToJob);

//Update Application Status
router.put("/user/application/status", verifyJWT, updateApplicationStatus);

//Follow Company
router.post("/user/follow", verifyJWT, followCompany);

module.exports = router;