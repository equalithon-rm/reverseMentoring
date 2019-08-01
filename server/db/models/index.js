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
// Mentee.belongsTo(Mentor, {constraints: false})
// Mentor.hasOne(Mentee)

// Mentor.belongsTo(Mentee)
// Mentee.hasOne(Mentor)

Mentor.belongsToMany(Mentee, {through: 'mentors_mentees'})
Mentee.belongsToMany(Mentor, {through: 'mentors_mentees'})

Mentor.belongsToMany(Skill, {through: 'mentors_skills'})
Skill.belongsToMany(Mentor, {through: 'mentors_skills'})

Mentee.belongsToMany(Skill, {through: 'mentees_skills'})
Skill.belongsToMany(Mentee, {through: 'mentees_skills'})

module.exports = {
  User,
  Mentee,
  Mentor,
  Skill
}
