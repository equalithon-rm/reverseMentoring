const router = require('express').Router()
const {Booking, Mentor, Mentee} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        {
          include: [
            {
              model: Mentor,
              where: {id: Booking.mentorId}
            },
            {
              model: Mentee,
              where: {id: Booking.menteeId}
            }
          ]
        }
      ]
    })
    res.json(bookings)
  } catch (err) {
    next(err)
  }
})

router.get('/:bookingId', async (req, res, next) => {
  try {
    const id = req.params.bookingId

    const singleBooking = await Booking.findByPk(id, {
      include: [
        {
          model: Mentor,
          where: {id: Booking.mentorId}
        },
        {
          model: Mentee,
          where: {id: Booking.menteeId}
        }
      ]
    })
    if (singleBooking) {
      res.json(singleBooking)
    } else {
      res.sendStatus(404).json({})
    }
  } catch (err) {
    next(err)
  }
})
