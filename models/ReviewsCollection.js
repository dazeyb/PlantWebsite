const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
	{
		comment: { type: String, required: true, minLength: 1 },
        rating: { type: Number, default: 0}, //will be updated with every review in array
	},
	{ timestamps: true }
);

// creating our model based on the schema for the resource COLLECTION from the database
// .model - "name of model", schema
const ReviewsCollection = mongoose.model("ReviewsCollection", reviewSchema);
// NOTE each file can only have ONE export
module.exports = ReviewsCollection;