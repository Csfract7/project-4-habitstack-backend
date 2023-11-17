const mongoose = require("mongoose");
const Habit = require("./habit"); // Import the Habit model

const StackSchema = new mongoose.Schema({
    name: {type:'String'},
    description: {type:'String'},
    type: {type:'String'},
    time: {type:'String'},
    place: {type:'String'},
    completed: {type:'String'},
    image: {type:'String'},
    habits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Habit' }]
  }, {timestamps: true});
  
const Stack = mongoose.model("Stack", StackSchema);
//   const Stack = mongoose.model("Stack", StackSchema);
  
console.log("Stack model loaded");

  module.exports = Stack