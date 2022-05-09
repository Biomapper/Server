const express = require('express');
const router = express.Router();

const VAL_Controller = require("../controllers/valController");

router.get('/', VAL_Controller.index);
router.get('/:data/:zoom/:x/:y/:x_pixel/:y_pixel/:max', VAL_Controller.retrieve_VAL);

module.exports = router;
