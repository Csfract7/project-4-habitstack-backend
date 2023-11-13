const router = require('express').Router()

//all functions/methods imported from controller's index.js
const { stackCtrls } = require('../controllers')


// ROUTES - METHODS
router.get("/", stackCtrls.getStack)
router.post("/", stackCtrls.createStack)
router.put('/:id', stackCtrls.updateStack)
router.delete('/:id', stackCtrls.deleteStack)

module.exports = router;