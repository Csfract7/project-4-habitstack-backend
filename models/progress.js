const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
    stackname: {type:'String'},
    completed: {type:'String'},
    image: {type:'String'}
  }, {timestamps: true});
  
const Progress = mongoose.model("Progress", ProgressSchema);
//   const Progress = mongoose.model("Progress", ProgressSchema);
  
  module.exports = Progress