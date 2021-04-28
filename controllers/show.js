const express = require("express");
const { reset } = require("nodemon");

const app = express ();

const router = express.Router();

const db = require("../models");

// router.get("/show", function (req, res) {
//     db.PlantsCollections.find({}, function (err, allPlants) {
//        if (err) return res.send(err);
//        const context = { plants: allPlants};
//        res.render("plants/show", context);
//        });  
//     // res.render("findmyplant");
//     });

router.get("/:id", function (req, res) {
	db.PlantsCollections.findById(req.params.id)
		//
		//.populate("author") // db.Author.findById()
		.exec(function (err, foundPlants) {
			if (err) return res.send(err);

			const context = { Plants: foundPlants };
			res.render("plants/show", context);
		});
});
  
    // router.get('/', function (req, res){
  //    
  // });
  
    module.exports = router;