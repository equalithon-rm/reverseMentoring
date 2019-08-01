const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Mentor = db.define('mentor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    validate: {
      [Sequelize.Op.any]: ['Female', 'Male']
    }
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  industry: {
    type: Sequelize.STRING,
    allowNull: false
  },
  blurb: {
    type: Sequelize.TEXT
  }
})

module.exports = Mentor
