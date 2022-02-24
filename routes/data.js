const express = require('express');
const router = express.Router();

// Require controller modules.
const DEM_controller = require("../controllers/demController");
const ABG_controller = require("../controllers/abgController");
const CHM_controller = require("../controllers/chmController");

/// CHM Routes ///

// GET index page for CHM (this essentially sends an error)
router.get('/CHM', CHM_controller.index);

// GET CHM data (depends on HTTP parameters)
//router.get('/CHM/:zoom/:x/:y', CHM_controller.retrieve_CHM);
router.get("/CHM/:zoom/:x/:y", CHM_controller.retrieve_CHM);


// ABG Routes ///

// GET index page for ABG (this essentially sends an error)
router.get('/ABG', ABG_controller.index);

// GET ABG data (depends on HTTP parameters)
router.get('/ABG/:zoom/:x/:y', ABG_controller.retrieve_ABG);



// DEM Routes //

// GET index page for DEM (this essentially sends an error)
router.get('/DEM', DEM_controller.index);

// GET DEM data (depends on HTTP parameters)
router.get('/DEM/:zoom/:x/:y', DEM_controller.retrieve_DEM);

module.exports = router;
