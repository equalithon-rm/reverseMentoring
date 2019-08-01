const Sequelize = require('sequelize')
const db = require('../db')

const Mentor = db.define('mentor', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    validate: {
      [Sequelize.Op.any]: ['Female', 'Non-binary', 'Male']
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

module.exports = Mentor
