const express = require("express");
const { reset } = require("nodemon");

const app = express ();

const router = express.Router();

const db = require("../models");



// REST Routes

// home - not yet created, could shop top 10 plants
// findmyplant - index page showing search filters that you can alter, and all the plants with some info filled in

//HOME 
router.get("/", function (req, res) {
  db.PlantsCollections.find({}, function (err, allPlants) {
     if (err) return res.send(err);
     const context = { plants: allPlants};
     res.render("plants/findmyplant", context);
     });  
  // res.render("findmyplant");
  });

  // router.get('/', function (req, res){
//    
// });

  module.exports = router;