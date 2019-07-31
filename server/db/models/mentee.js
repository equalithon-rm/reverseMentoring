const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Mentee = db.define('mentee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  industry: {
    type: Sequelize.STRING,
    allowNull: false
  },
  blurb: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Mentee
