const express = require("express");
const RegistrationController = require('../controllers/auth/RegistrationController')
const LoginController = require("../controllers/auth/LoginController");
const AdminController = require("../controllers/AdminController");
const EmployeeController = require("../controllers/EmployeeController");
const ClientController = require("../controllers/ClientController");

const Authenticate = require("../middlewares/Authenticate");
const AdminMiddleware = require("../middlewares/AdminMiddleware");
const EmployeeMiddleware = require("../middlewares/EmployeeMiddleware");
const ClientMiddleware = require("../middlewares/ClientMiddleware");
const router = express.Router();

// registration
router.post('/admin', RegistrationController.storeAdmin)
router.post('/employee', RegistrationController.storeEmployee)
router.post('/registration', RegistrationController.storeClient)
// login
router.post('/login', LoginController.login)
// auth routes
router.get('/users', Authenticate, AdminController.userIndex)

// admin dashboard
router.get('/admin-dashboard', AdminMiddleware, AdminController.dashboard)
// employee dashboard
router.get('/employee-dashboard', EmployeeMiddleware, EmployeeController.dashboard)
// client dashboard
router.get('/client-dashboard', ClientMiddleware, ClientController.dashboard)


module.exports = router;