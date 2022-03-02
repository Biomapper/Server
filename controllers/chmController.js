const fs = require("fs"); // needed to work with the file system
const path = require("path");
const { spawn } = require("child_process");

exports.index = function (req, res) {
    //TODO: Implement EMS - Add a more specific error
    // such as what exactly is missing in the request
    res.status(404).send("Invalid request for CHM data. \
        Please use format <IP>:3000/dataType/zoom/x_coor/y_coor/min/max");
}

exports.retrieve_CHM = function (req, res) {

    //TODO: Implement the code that will retrieve a modified tile
    // need in this format /<dataType>/<zoom>/<x>/<y>.png 

    //let test = path.join(__dirname, "..", "test.txt"); //This is a reference for 
    // formatting keep for now

    /*
   this code just sends a png depending on zoom, x coor, and y coor. 
   This assumes we are in the CHM directory
   will need to be updated for modified tiles
   */
    //console.log(req.params.min);
    //console.log(req.params.max);

    const parentdir = "../../data";
    let tile = path.join(__dirname, parentdir, "CHM", `${req.params.zoom}`,
        `${req.params.x}`, `${req.params.y}.png`);

    // check to see if file exists
    if (fs.existsSync(tile)) {
        const pythonScript = spawn('python3', ['main.py', tile, req.params.min, req.params.max])

        pythonScript.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        pythonScript.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        pythonScript.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });

        pythonScript.on('exit', () => {
            res.sendFile(path.join(__dirname, '..', 'filtered.png'));
        })
    } else {
        res.status(404).send("<title>404 Not Found</title> \
           <h1>Not Found</h1> \
           <p>The requested tile was not found on this server.</p>");
    }


}
