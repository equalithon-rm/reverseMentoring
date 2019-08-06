const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  fullName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  googleId: {
    type: Sequelize.STRING
  },
  hasCompletedSignup: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = User
