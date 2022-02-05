// display the home page
exports.index = function(req, res) {
    // Sends a Bad Request status code since the server 
    // is expecting a certain request
    res.status(400).send("Not enough information provided to the server.");
}
