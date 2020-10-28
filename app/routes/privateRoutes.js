var app = require('express');
var router = app.Router();
const authMiddleware = require('../middlewares/AuthMiddleware');

var authController = require('../controllers/authController');

router.use(authMiddleware.auth);
router.post('/signin', authController.signin);

module.exports = router;