const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const adminController = require('../controllers/adminController');

// Admin login route
router.get('/login', adminController.getLoginPage);
router.post('/login', adminController.postLogin);

// Admin dashboard route
router.get('/index', adminController.getIndex);
router.get('/register-company',adminController.getRegisterPage);
router.post('/register',adminController.registerCompany);
router.get('/dashboard', adminController.checkAdminAuthorization, adminController.getDashboard);

module.exports = router;
