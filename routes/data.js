const express = require('express');
const router = express.Router();

// Require controller modules.
const DEM_controller = require("../controllers/demController");
const AGB_controller = require("../controllers/agbController");
const CHM_controller = require("../controllers/chmController");

/// CHM Routes ///

// GET index page for CHM (this essentially sends an error)
router.get('/CHM', CHM_controller.index);

// GET CHM data (depends on HTTP parameters)
//router.get('/CHM/:zoom/:x/:y', CHM_controller.retrieve_CHM);
router.get("/CHM/:zoom/:x/:y/:min/:max", CHM_controller.retrieve_CHM);


// AGB Routes ///

// GET index page for AGB (this essentially sends an error)
router.get('/AGB', AGB_controller.index);

// GET AGB data (depends on HTTP parameters)
router.get('/AGB/:zoom/:x/:y/:min/:max', AGB_controller.retrieve_AGB);



// DEM Routes //

// GET index page for DEM (this essentially sends an error)
router.get('/DEM', DEM_controller.index);

// GET DEM data (depends on HTTP parameters)
router.get('/DEM/:zoom/:x/:y/:min/:max', DEM_controller.retrieve_DEM);

module.exports = router;
