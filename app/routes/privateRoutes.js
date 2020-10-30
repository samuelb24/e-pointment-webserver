var app = require('express');
var router = app.Router();
const authMiddleware = require('../middlewares/AuthMiddleware');
router.use(authMiddleware.auth);

var authController = require('../controllers/authController');
router.post('/signin', authController.signin);

var userController = require('../controllers/userController');
router.post('/updateProfile', userController.updateProfile);

var slotController = require('../controllers/slotController');
router.post('/createNewSlot', slotController.createNew);
router.get('/allSlots', slotController.list);

module.exports = router;