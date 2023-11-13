const router = require('express').Router()
const calendarRoute = require('./calendarRoutes') //import the calendar routing js page
const habitRoute = require('./habitRoutes')
const progressRoute = require('./progressRoutes')
const stackRoute = require('./stackRoutes')


router.use('/calendar', calendarRoute)
router.use('/habit', habitRoute)
router.use('/progress', progressRoute)
router.use('/stack', stackRoute)


module.exports = router;