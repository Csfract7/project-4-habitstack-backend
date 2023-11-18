const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
    year: {type:'String'},
    month: {type:'String'},
    day: {type:'String'},
    name: {type:'String'},
    completed: {type:'String'}
  }, {timestamps: true});
  
const Calendar = mongoose.model("Calendar", CalendarSchema);
//   const Calendar = mongoose.model("Calendar", CalendarSchema);
  
  module.exports = Calendar