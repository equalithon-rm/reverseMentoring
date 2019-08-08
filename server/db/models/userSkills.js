const Sequelize = require('sequelize')
const db = require('../db')

const UserSkills = db.define('UserSkills', {
  currentSkills: {
    type: Sequelize.STRING,
    allowNull: false
  },
  skillsInterestedIn: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = UserSkills
