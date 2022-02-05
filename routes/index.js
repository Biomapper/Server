const express = require('express');
const router = express.Router();

// require controller modules
const home_controller = require('../controllers/homeController');

// GET home page
router.get('/', home_controller.index);

module.exports = router;

