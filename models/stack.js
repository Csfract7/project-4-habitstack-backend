const mongoose = require("mongoose");

const StackSchema = new mongoose.Schema({
    name: {type:'String'},
    description: {type:'String'},
    type: {type:'String'},
    time: {type:'String'},
    place: {type:'String'},
    completed: {type:'String'},
    image: {type:'String'}
  }, {timestamps: true});
  
const Stack = mongoose.model("Stack", StackSchema);
//   const Stack = mongoose.model("Stack", StackSchema);
  
  module.exports = Stack