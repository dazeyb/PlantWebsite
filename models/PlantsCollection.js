const mongoose = require("mongoose");

const plantsSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, minLength: 1 },
		description: { type: String, required: true, minLength: 1 },
		light: { type: Number },
        //temp: { type: int, required: true, default: 0},
        price:  { type: Number },
        rating: { type: Number }, //will be updated with every review in array
        reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "ReviewsCollection" }]
	},
	{ timestamps: true }
);

// creating our model based on the schema for the resource COLLECTION from the database
// .model - "name of model", schema
const PlantsCollection = mongoose.model("PlantsCollection", plantsSchema);
// NOTE each file can only have ONE export
module.exports = PlantsCollection;