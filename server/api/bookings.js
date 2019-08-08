const router = require('express').Router()
const {Booking, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        {
          model: User
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
          model: User
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

router.delete('/:id', async (req, res, next) => {
  try {
    await Booking.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204).json({})
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newBooking = await Booking.create(req.body)
    res.json(newBooking)
  } catch (error) {
    next(error)
  }
})
