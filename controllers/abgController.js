const fs = require("fs");// needed to work with the file system
const path = require("path");

exports.index = function(req, res) {
    // TODO: update later when we have this data
    // but make this a 'Bad Request' since it won't be
    // a valid HTTP request
    res.send("NOT IMPLEMENTED: Still need ABG data");
};

exports.retrieve_ABG = function(req,res) {
    //TODO: update later when we have this data
    // This will be used to parse the request
    // to get the right ABG tile
    res.send("NOT IMPLEMENTED: Still need ABG data to do processing");
};
