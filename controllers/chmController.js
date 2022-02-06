exports.index = function(req, res) {
    //TODO: Add a more specific error
    // such as what exactly is missing in the request
    // might have to
    res.status(400).send("Invalid request for CHM data. \
        Please give more information.");
}

exports.retrieve_CHM = function(req, res) {
    res.send("NOT IMPLEMENTED: Work in progress!"); //TODO: Delete this

    //TODO: Implement the code that will retrieve a tile
    // need in this format /zoom_lvl/X_coor/Y_coor.png
};
