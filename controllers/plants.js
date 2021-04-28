// const { response } = require('express');
// const express = require('express');
// const router = express.Router();
// const db =require("./models");

// // router.get('/', (req, res)=>{
// // 	res.render('plants/index.ejs');
// // });

// router.get('/', function (req, res){
//     db.PlantsCollections.find({}, function (err, allPlants) {
//         if (err) return response.send(err);
//         const context = { plants: allPlants};
//         response.render("products/index", context);
//     });
// });

// module.exports = router;