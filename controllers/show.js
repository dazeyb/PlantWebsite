const express = require("express");
const { reset } = require("nodemon");

const app = express ();

const router = express.Router();

const db = require("../models");

//SEARCH
router.get("/search", async function(req, res){
	
		try{
			// console.log("testing search");
			const foundPlant=await db.PlantsCollection.findOne({name:req.query.name})
			//console.log(req.query);
			res.redirect(`/show/${foundPlant._id}`)
		}
		catch(err){
			console.log(err);
			return res.send(err)
		};
	});

//FILTER
router.get("/filter", async function(req, res){
	
	try{
		console.log("testing filter");
		let foundPlant=[await db.PlantsCollection.findOne({light:req.query.light})]
		console.log(foundPlant);
		const context = { plants: foundPlant};
		res.render("plants/searchresults", context)
	}
	catch(err){
	};

});




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


//loads EDIT COMMENT page
router.get("/:id/:plantid/edit", function (req, res) {
	db.ReviewsCollection.findById(req.params.id, function (err, foundReview) {
		if (err) return res.send(err);

		const context = { review: foundReview, plantid:req.params.plantid };
		
		res.render("plants/edit", context);
	});
});


//UPDATE VALUES IN REVIEWS COLLECTION COMMENT

router.put('/:id/:plantid', (req, res)=>{
	db.ReviewsCollection.findByIdAndUpdate(req.params.id, 
	req.body,
	// return the new object
	{ new: true },
	// callback function after the update has completed
	function (err) {
		if (err) return res.send(err);
		return res.redirect(`/show/${req.params.plantid}`);
	});
});



module.exports = router;