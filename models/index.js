const mongoose = require('mongoose');

// our db will be called Project1-db
const connectionString = 'mongodb://localhost:27017/Project1-db';

mongoose.connect(connectionString, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose error: ${err}`);
});

// Import models and then export them so all modules/files
// can have access to all models through this file
module.exports = {
  Project1: require('./PlantsCollection.js'),
};