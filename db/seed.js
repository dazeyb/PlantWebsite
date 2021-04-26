const db = require("../models/"); //require models which has db

const plants = [
    {name: "Snake-Tongue", light: 3},
    // {name: "bonsai"},
];

db.PlantsCollections.insertMany(plants, function(err, createdPlant) {
    if (err) return console.log(err);
    console.log({ createdPlant });
    process.exit(); //this will exit the file when this line is hit
});