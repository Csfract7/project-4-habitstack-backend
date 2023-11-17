const mongoose = require("mongoose");
const Stack = require("./stack");

const ProgressSchema = new mongoose.Schema({
    stackname: { Stack },
    completed: { Stack },
    image: {Stack}
  }, {timestamps: true});
  
const Progress = mongoose.model("Progress", ProgressSchema);
//   const Progress = mongoose.model("Progress", ProgressSchema);
  
  module.exports = Progress