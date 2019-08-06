'use strict'

const db = require('../server/db')
const {Skill, Mentor, Mentee} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const skill = await Promise.all([
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
    Mentor.create({
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
    Mentor.create({
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
    Mentor.create({
      firstName: 'Jocelyn',
      lastName: 'Jeriah',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: 'GA Student'
    }),
    Mentor.create({
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
    Mentor.create({
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
    Mentor.create({
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

  const mentees = [
    {
      firstName: 'Wonder',
      lastName: 'Woman',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer in Training',
      dateJoinedCompany: Date.now(),
      blurb: '1907 GH-NY Student'
    },
    {
      firstName: 'Captain',
      lastName: 'Marvel',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer in Training',
      dateJoinedCompany: Date.now(),
      blurb: '1907 GH-NY Student'
    },
    {
      firstName: 'The',
      lastName: 'Wasp',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer in Training',
      dateJoinedCompany: Date.now(),
      blurb: 'GA Student'
    },
    {
      firstName: 'Black',
      lastName: 'Widow',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Front End Software Developer in Training',
      dateJoinedCompany: Date.now(),
      blurb: 'GA Student'
    },
    {
      firstName: 'Captain',
      lastName: 'America',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      company: 'Essteem',
      position: 'Full Stack Software Developer in Training',
      dateJoinedCompany: Date.now(),
      blurb: '1904 FSA-NY Graduate'
    },
    {
      firstName: 'Iron',
      lastName: 'Man',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      company: 'Essteem',
      position: 'Full Stack Software Developer in Training',
      dateJoinedCompany: Date.now(),
      blurb: '1904 FSA-NY Graduate'
    }
  ]

  await Promise.all(
    mentees.map(mentee => {
      return Mentee.create(mentee)
    })
  )

  // const mentees = await Promise.all([
  //   Mentee.create(
  //  ),
  //   Mentee.create(),
  //   Mentee.create(),
  //   Mentee.create(),
  //   Mentee.create(),
  //   Mentee.create()
  // ])

  // console.log(`seeded ${skill.length} skill`)
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
