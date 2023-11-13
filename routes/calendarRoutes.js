const router = require('express').Router()

//all functions/methods imported from controller's index.js
const { calendarCtrls } = require('../controllers')


// ROUTES - METHODS
router.get("/", calendarCtrls.getCalendar)
router.post("/", calendarCtrls.createCalendar)
router.put('/:id', calendarCtrls.updateCalendar)
router.delete('/:id', calendarCtrls.deleteCalendar)

module.exports = router;