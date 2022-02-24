const fs = require("fs"); // needed to work with the file system
const path = require("path");

exports.index = function(req,res) {
    // TODO: Implement EMS - Add a more specfic error
    // such as what exactly is missing in the request
    res.status(400).send("Invalid request for DEM data. \
         Please use format <IP>:3000/dataType/zoom/x_coor/y_coor");
};

exports.retrieve_DEM = function(req, res) {
    // TODO: Implement color-filtering code
    
    // TODO: format for the server
    const parentdir = "../../data";
    let tile = path.join(__dirname,parentdir,"DEM",`${req.params.zoom}`,
               `${req.params.x}`,`${req.params.y}.png`);
    console.log(tile); //TODO: delete later
    // check to see if file exists
    if (fs.existsSync(tile)) {
        res.sendFile(tile);
    } else {
        res.status(404).send("<title>404 Not Found</title> \
            <h1>Not Found</h1> \
            <p>The requested title was not found on this server.</p>");
    }
}
