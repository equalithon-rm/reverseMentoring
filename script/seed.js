'use strict'

const db = require('../server/db')
const {User, Skill, Mentor, Mentee} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const skills = await Promise.all([
    Skill.create({name: 'JavaScript'}),
    Skill.create({name: 'Node.js'}),
    Skill.create({name: 'Express.js'}),
    Skill.create({name: 'Sequelize.js'}),
    Skill.create({name: 'PostgreSQL'}),
    Skill.create({name: 'React.js'}),
    Skill.create({name: 'Redux.js'}),
    Skill.create({name: 'Socket.io'}),
    Skill.create({name: 'Bulma.css'})
  ])

  const mentors = await Promise.all([
    User.create({
      firstName: 'Macarena',
      lastName: 'Carreno',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: '1902 GH-NY Graduate'
    }),
    User.create({
      firstName: 'Linda',
      lastName: 'Saraguro',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: '1902 GH-NY Graduate'
    }),
    User.create({
      firstName: 'Jocelyn',
      lastName: 'Jeriah',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: 'Washington D.C.'
    }),
    User.create({
      firstName: 'Arianna',
      lastName: 'Choza',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Front End Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: 'GA Graduate'
    }),
    User.create({
      firstName: 'Sam',
      lastName: 'Peach',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: '1904 FSA-NY Graduate'
    }),
    User.create({
      firstName: 'Tal',
      lastName: 'Luigi',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: '1904 FSA-NY Graduate'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${skills.length} skills`)
  console.log(`seeded ${mentors.length} mentors`)
  console.log(`seeded ${mentees.length} mentees`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
