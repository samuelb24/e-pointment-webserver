var app = require('express');
var router = app.Router();

var healthController = require('../controllers/healthController');

router.get('/health', healthController.doHealthCheck);

module.exports = router;