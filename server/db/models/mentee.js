const Sequelize = require('sequelize')
const db = require('../db')

const Mentee = db.define('mentee', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    validate: {
      [Sequelize.Op.any]: ['Female', 'Non-binary']
    }
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateJoinedCompany: {
    type: Sequelize.DATE,
    allowNull: false
    // defaultValue: Sequelize.NOW
  },
  blurb: {
    type: Sequelize.TEXT
  }
})

module.exports = Mentee
