const Sequelize = require('sequelize')
const db = require('../db')

const Booking = db.define('booking', {
  dateConnection: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  notes: {
    type: Sequelize.TEXT
  },
  mentorId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  verified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Booking
