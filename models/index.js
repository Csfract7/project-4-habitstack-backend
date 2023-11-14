const mongoose = require("mongoose")
const {DATABASE_URL} = process.env
const Calendar = require("./calendar")
const Habit = require("./habit")
const Progress = require("./progress")
const Stack = require("./stack")

// DATABASE CONNECTION
// Establish Connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error))


//all code above this
module.exports = {
  Calendar,
  Habit,
  Progress,
  Stack
}