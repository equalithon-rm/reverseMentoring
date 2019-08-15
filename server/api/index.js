const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))

router.use('/bookings', require('./bookings'))
router.use('/skills', require('./skills'))
router.use('/sendEmail', require('./sendEmail'))
router.use('/connect', require('./connect'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
