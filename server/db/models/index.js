const User = require('./user')
const UserSkills = require('./userskills')
const Skill = require('./skill')
const Booking = require('./booking')

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

Skill.hasMany(Booking)

/// USER Skills  ///

User.hasMany(Booking)

User.belongsToMany(Skill, {
  through: 'UserSkills',
  foreignKey: 'userId'
})

// User.belongsToMany(Skill, {
//   through: 'UserSkills',
//   foreignKey: 'userId',
//   as: 'currentSkillsId'
// })

Skill.belongsToMany(User, {
  through: 'UserSkills',
  foreignKey: 'currentSkillsId',
  as: 'currentSkillsId'
})

Skill.belongsToMany(User, {
  through: 'UserSkills',
  foreignKey: 'skillsInterestedInId',
  as: 'skillsInterestedInId'
})

Skill.hasMany(UserSkills)

User.hasMany(UserSkills)

module.exports = {
  User,
  Skill,
  UserSkills,
  Booking
}
