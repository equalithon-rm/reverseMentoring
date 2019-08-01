const Sequelize = require('sequelize')
const db = require('../db')

const Skill = db.define('skill', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Skill
