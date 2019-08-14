const router = require('express').Router()
const {Booking} = require('../db/models')

module.exports = router

router.get('/:sender/:responder/:skill', async (req, res, next) => {
  const {sender, responder, skill} = req.params
  try {
    const newBooking = await Booking.findOrCreate({
      where: {
        userId: sender,
        mentorId: responder,
        skillId: skill
      }
    })
    res.redirect(`/connect/${sender}`)
  } catch (err) {
    next(err)
  }
})
