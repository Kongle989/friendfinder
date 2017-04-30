// REQUIRE ALL THAT STUFF I NEED
var express = require("express"),
    bodyParser = require("body-parser"),
    app = express();
// BODY PARSER STUFF
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
// GET HTML AND API ROUTES
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// START LISTENING
app.listen(7777, function () {
    console.log("I am listening\nLets find you a friend.");
});