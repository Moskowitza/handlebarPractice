// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on our super hero characters in cast.js.
// ===============================================================================

var characters = require("../data/cast");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/cast", function(req, res) {
    res.json(characters);
  });

};
