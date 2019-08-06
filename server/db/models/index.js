const User = require('./user')
const Mentee = require('./mentee')
const Mentor = require('./mentor')
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

/// MENTOR ///
Mentor.belongsToMany(Mentee, {through: 'mentors_mentees'})
Mentee.hasMany(Booking)

// MENTEE ///
Mentee.belongsToMany(Mentor, {through: 'mentors_mentees'})
Mentor.hasMany(Booking)

module.exports = {
  User,
  Mentee,
  Mentor,
  Skill,
  Booking
}
