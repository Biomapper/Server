const fs = require("fs"); // needed to work with the file system
const path = require("path");

exports.index = function(req, res) {
    //TODO: Implement EMS - Add a more specific error
    // such as what exactly is missing in the request
    res.status(400).send("Invalid request for CHM data. \
        Please use format <IP>:3000/dataType/zoom/x_coor/y_coor");
}

exports.retrieve_CHM = function(req, res) {

    //TODO: Implement the code that will retrieve a modified tile
    // need in this format /<dataType>/<zoom>/<x>/<y>.png 

    //let test = path.join(__dirname, "..", "test.txt"); //This is a reference for 
     // formatting keep for now

    //TODO: Implement color-filtering code
    

      /*
     this code just sends a png depending on zoom, x coor, and y coor. 
     This assumes we are in the CHM directory
     will need to be updated for modified tiles
     TODO: Format for the server
     */
    const parentdir = "../../data";
    let tile = path.join(__dirname, parentdir, "CHM", `${req.params.zoom}`,
                `${req.params.x}`,`${req.params.y}.png`);
    const error = path.join(__dirname,"..","EMS","error.html");
    console.log(tile); //TODO: delate late
    // check to see if file exists
    if (fs.existsSync(tile)) {
        res.sendFile(tile);
    } else {
        res.sendFile(error);
    }
    
}
