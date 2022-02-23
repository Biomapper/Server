const fs = require("fs"); // needed to work with file system
const path = require("path");

exports.index = function(req,res) {
    // TODO: Implement EMS - Add a more specfic error
    // such as what exactly is missing in the request
    res.status(400).send("Invalid request for DEM data. \
        Please give more information.");
};

exports.retrieveDEM = function(req, res) {
    // TODO: Implement color-filtering code
    
    // TODO: format for the server
    let parentdir = "../../data";
    let tile = path.join(__dirname,parentdir,"DEM",`${req.params.zoom}`,
               `${req.params.x}`,`${req.params.y}.png`);
    console.log(tile);
    // check to see if file exists
    if (fs.existsSync(tile)) {
        res.sendFile(tile);
    } else {
        res.send("This file doesn't exist, try again!");
    }
}
