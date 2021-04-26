const mongoose = require("mongoose");

const plantsSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, minLength: 1 },
		description: { type: String, required: true, minLength: 1 },
		light: {Number, default: 0},
        //temp: { type: int, required: true, default: 0},
        price:  {Number, default: 0},
        rating: {Number, default: 0}, //will be updated with every review in array
        reviews: [Array]
	},
	{ timestamps: true }
);

// creating our model based on the schema for the resource COLLECTION from the database
// .model - "name of model", schema
const PlantsCollections = mongoose.model("PlantsCollections", plantsSchema);
// NOTE each file can only have ONE export
module.exports = PlantsCollections;