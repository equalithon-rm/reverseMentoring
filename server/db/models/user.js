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
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  googleId: {
    type: Sequelize.STRING
  },
  hasCompletedSignup: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  currentCompany: {
    type: Sequelize.STRING
  },
  currentPosition: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['male', 'female', 'other']]
    }
  },
  bio: {
    type: Sequelize.TEXT
  }
})

module.exports = User
