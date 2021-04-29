const express = require("express");
const { reset } = require("nodemon");

const app = express ();

const router = express.Router();

const db = require("../models");

// router.get("/show", function (req, res) {
//     db.PlantsCollection.find({}, function (err, allPlants) {
//        if (err) return res.send(err);
//        const context = { plants: allPlants};
//        res.render("plants/show", context);
//        });  
//     // res.render("findmyplant");
//     });

router.get("/:id", function (req, res) {
	db.PlantsCollection.findById(req.params.id)
		.populate("reviews") // db.Author.findById() //translating review ids to variables stored in db
		.exec(function (err, foundPlants) {
			if (err) return res.send(err);

			const context = { Plant: foundPlants }; //Plants
			res.render("plants/show", context);
		});
});


// This allows us to create comments and post them to the page/database
router.post("/:id", function (req, res) {
	db.ReviewsCollection.create(req.body, function (err, createdReview) {
		if (err) return res.send(err);
		console.log(createdReview);

		db.PlantsCollection.findById(req.params.id,function (err, foundPlant) {
			if (err) return res.send(err);

			foundPlant.reviews.push(createdReview); 
			foundPlant.save(); // save relationship to database, commits to memory

			return res.redirect(`/show/${req.params.id}`);
		});
	});
});


// This sets up our page so comments can be deleted from the database
router.delete('/:id', (req, res)=>{
	db.ReviewsCollection.findByIdAndRemove(req.params.id, (err, deletedReview)=>{
	  db.PlantsCollection.findOne({'comment': req.params.id}, (err, foundPlant) => {
		   if(err){
			  res.send(err);
			} else {
			  foundPlant.reviews.remove(req.params.id);
			  foundPlant.save((err, updatedReview) => {
				console.log(`Deleted ${updatedReview}`);
				res.redirect(`/show/${req.params.id}`);
			  })
			}
	  })
	});
});
  

    module.exports = router;