const router = require('express').Router()

//all functions/methods imported from controller's index.js
const { habitCtrls } = require('../controllers')


// ROUTES - METHODS
router.get("/", habitCtrls.getHabit)
router.post("/", habitCtrls.createHabit)
router.put('/:id', habitCtrls.updateHabit)
router.delete('/:id', habitCtrls.deleteHabit)

module.exports = router;