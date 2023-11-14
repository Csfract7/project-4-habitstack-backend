const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
    name: {type:'String'},
    description: {type:'String'},
    type: {type:'String'},
    time: {type:'String'},
    place: {type:'String'},
    completed: {type:'String'},
    image: {type:'String'}
  }, {timestamps: true});
  
const Habit = mongoose.model("Habit", HabitSchema);
//   const Habit = mongoose.model("Habit", HabitSchema);
  
  module.exports = Habit