// display the home page
exports.index = function(req, res) {
    // Sends a Bad Request status code since the server 
    // is expecting a certain request
    res.status(404).send("<title>404 Not Found</title> \
         <h1>Not Found</h1> \
          <p> Missing information to request tiles.");
}
