// 4. Your `apiRoutes.js` file should contain two routes:
// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var characters = require("../data/cast");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/cast", function(req, res) {
    res.json(characters);
  });

  app.post("/api/cast", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
      
      characters.push(req.body);
      
      //move the response to the front
      var matchedFriend=friendMatcher(friendData);
      console.log(matchedFriend);
      res.json(matchedFriend);
  });
};
