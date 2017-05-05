var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(request, response){
  burger.selectAll(function(data){
    var hbsObject = {
    burgers: data
  };
  console.log(hbsObject);
  response.render("index", hbsObject);
  });
});

router.post("/", function(request, response){
  burger.insertOne([
    "burger_name", "devoured"
  ],[
    request.body.burger_name, request.body.devoured
  ], function() {
    response.redirect("/");
  });
});

router.put("/:id", function(request, response) {
  var condition = "id = " + request.params.id;
  console.log("condition", condition);

  burger.update({
    devoured: request.body.devoured
  }, condition, function() {
    response.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
