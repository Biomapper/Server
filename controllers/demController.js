const fs = require("fs"); // needed to work with the file system
const path = require("path");
const { spawn } = require("child_process");

exports.index = function (req, res) {
    // TODO: Implement EMS - Add a more specfic error
    // such as what exactly is missing in the request
    res.status(400).send("Invalid request for DEM data. \
         Please use format <IP>:3000/dataType/zoom/x_coor/y_coor/min/max");
};

exports.retrieve_DEM = function (req, res) {
    // TODO: Implement color-filtering code

    // TODO: format for the server
    const parentdir = "../../data";
    let tile = path.join(__dirname, parentdir, "DEM", `${req.params.zoom}`,
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
            <p>The requested title was not found on this server.</p>");
    }
}
