const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  googleId: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  fullName: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['Male', 'Female', 'Non-binary', 'Other']]
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  currentCompany: {
    type: Sequelize.STRING
  },
  currentPosition: {
    type: Sequelize.STRING
  },
  dateJoinedCurrentCompany: {
    type: Sequelize.DATE
  },
  bio: {
    type: Sequelize.TEXT
  },
  calendlyUsername: {
    type: Sequelize.STRING
  },
  hasCompletedSignup: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

module.exports = User
