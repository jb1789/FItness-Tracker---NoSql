const mongoose = require("mongoose");
require('dotenv').config();

// const dbConfig = process.env.MONGODB_URI || "mongodb://localhost/userdb";
// const dbConfig = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  const dbConfig = mongoose.connect(process.env.MONGODB_URI, {
   useNewUrlParser: true, 
   useUnifiedTopology: true 
  });


async function connectDB(){
  await mongoose.connect(dbConfig,
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true  
  // }, 
  () =>  
  console.log("Connected to DB")
);
}

module.exports = connectDB;
