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
  }
})

module.exports = Booking
