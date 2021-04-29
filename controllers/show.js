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

			const context = { Plant: foundPlants}; //Plants
			res.render("plants/show", context);
		});
});


// CREATE: This allows us to create comments and post them to the page/database
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


// DELETE: This sets up our page so comments can be deleted from the database
router.delete('/:id/:plantid', (req, res)=>{
	//This will remove from Reviews, and by association remove it from from PlantsCollection as well
	db.ReviewsCollection.findByIdAndRemove(req.params.id, (err, deletedReview)=>{
		if(err){
			console.log(err);
			return res.send("Server Error :(")

		} else {
				res.redirect(`/show/${req.params.plantid}`);
				console.log(`Deleted comment ${deletedReview}`);		  
		}
	})
});

  

module.exports = router;