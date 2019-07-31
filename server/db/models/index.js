const User = require('./user')
const Mentee = require('./mentee')
const Mentor = require('./mentor')
const Skill = require('./skill')

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
Mentee.belongsTo(Mentor)
Mentee.hasOne(Mentor)
Skill.hasMany(Mentor)
Mentor.hasMany(Skill)
Mentee.hasMany(Skill)
Skill.hasMany(Mentee)

module.exports = {
  User,
  Mentee,
  Mentor,
  Skill
}
