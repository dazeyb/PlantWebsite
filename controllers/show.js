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
		.populate("reviews") // db.Author.findById() //translating review ids to variables stored in db
		.exec(function (err, foundPlants) {
			if (err) return res.send(err);

			const context = { Plant: foundPlants }; //Plants
			res.render("plants/show", context);
		});
});



router.post("/:id", function (req, res) {
	db.ReviewsCollection.create(req.body, function (err, createdReview) {
		if (err) return res.send(err);
		console.log(createdReview);

		// allows us to add an article to the author
		//.exec short for execute. used to help stack functions. similar to .then. after this query, exectute this one!
		db.PlantsCollections.findById(req.params.id,function (err, foundPlant) {
			if (err) return res.send(err);

			// update the author articles array
			foundPlant.reviews.push(createdReview); // adds article to the author
			foundPlant.save(); // save relationship to database, commits to memory

			return res.redirect(`/show/${req.params.id}`);
		});
	});
});
	
	// router.get('/', function (req, res){
  //    
  // });
  
    module.exports = router;