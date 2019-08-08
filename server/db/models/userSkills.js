const Sequelize = require('sequelize')
const db = require('../db')

const UserSkills = db.define('UserSkills')

module.exports = UserSkills
