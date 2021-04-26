const express = require("express");

const app = express ();

const router = express.Router();

const db = require("../models");



// REST Routes

// home - not yet created, could shop top 10 plants
// findmyplant - index page showing search filters that you can alter, and all the plants with some info filled in

router.get("/findmyplant", function (req, res) {
    res.render("findmyplant");
  });


  module.exports = router;