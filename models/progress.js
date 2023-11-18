const mongoose = require("mongoose");
const Stack = require("./stack");

const ProgressSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.ObjectId, ref: 'Stack' },
    completed: { type: mongoose.Schema.Types.ObjectId, ref: 'Stack' },
    image: { type: mongoose.Schema.Types.ObjectId, ref: 'Stack' }
  }, {timestamps: true});
  
const Progress = mongoose.model("Progress", ProgressSchema);
//   const Progress = mongoose.model("Progress", ProgressSchema);
  
  module.exports = Progress