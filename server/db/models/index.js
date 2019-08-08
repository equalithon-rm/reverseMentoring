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

Skill.belongsToMany(User, {
  through: 'UserSkills',
  foreignKey: 'skillId',
  as: 'skillId'
})

UserSkills.hasOne(User)

User.hasMany(UserSkills)

Skill.hasMany(UserSkills, {
  foreignKey: 'skillsInterestedInId',
  as: 'skillsInterestedInId'
})

module.exports = {
  User,
  Skill,
  UserSkills,
  Booking
}
