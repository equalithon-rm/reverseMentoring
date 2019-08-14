const User = require('./user')
const Skill = require('./skill')
const Booking = require('./booking')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

const SkillsInterestedIn = db.define('skillsInterestedIn')
const CurrentSkills = db.define('currentSkills')

Skill.hasMany(Booking)
User.hasMany(Booking)

Skill.belongsToMany(User, {
  through: 'currentSkills'
})

Skill.belongsToMany(User, {
  through: 'skillsInterestedIn'
})

Skill.hasMany(CurrentSkills)
Skill.hasMany(SkillsInterestedIn)

User.hasMany(CurrentSkills)
User.hasMany(SkillsInterestedIn)

CurrentSkills.belongsTo(User)
CurrentSkills.belongsTo(Skill)

SkillsInterestedIn.belongsTo(Skill)
SkillsInterestedIn.belongsTo(User)

module.exports = {
  User,
  Skill,
  Booking,
  SkillsInterestedIn,
  CurrentSkills
}
