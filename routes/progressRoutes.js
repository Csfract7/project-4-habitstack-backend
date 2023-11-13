const router = require('express').Router()

//all functions/methods imported from controller's index.js
const { progressCtrls } = require('../controllers')


// ROUTES - METHODS
router.get("/", progressCtrls.getProgress)
router.post("/", progressCtrls.createProgress)
router.put('/:id', progressCtrls.updateProgress)
router.delete('/:id', progressCtrls.deleteProgress)

module.exports = router;