'use strict'

const db = require('../server/db')
const {Skill, User, UserSkills} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const seedSkills = [
    {name: 'JavaScript'},
    {name: 'Node.js'},
    {name: 'Express.js'},
    {name: 'Sequelize.js'},
    {name: 'PostgreSQL'},
    {name: 'React.js'},
    {name: 'Redux.js'},
    {name: 'Socket.io'},
    {name: 'Bulma.css'}
  ]

  const seedUser = [
    {
      firstName: 'Macarena',
      lastName: 'Carreno',
      fullName: 'Macarena Carreno',
      email: 'macarena@macarena.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: '1902 GH-NY Graduate'
    },
    {
      firstName: 'Tal',
      lastName: 'Luigi',
      fullName: 'Tal Luigi',
      email: 'tal@tal.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: '1904 FSA-NY Graduate'
    },
    {
      firstName: 'Sam',
      lastName: 'Peach',
      fullName: 'Sam Peach',
      email: 'sam@sam.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: '1904 FSA-NY Graduate'
    },
    {
      firstName: 'Arianna',
      lastName: 'Choza',
      fullName: 'Arianna Choza',
      email: 'arianna@arianna.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      currentCompany: 'Essteem',
      currentPosition: 'Front End Software Developer',
      dateJoinedCompany: Date.now(),
      bio: 'GA Graduate'
    },
    {
      firstName: 'Jocelyn',
      lastName: 'Jeriah',
      fullName: 'Jocelyn Jeriah',
      email: 'jj@jj.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: 'GA Student'
    },
    {
      firstName: 'Linda',
      lastName: 'Saraguro',
      fullName: 'Linda Saraguro',
      email: 'linda@linda.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: '1902 GH-NY Graduate'
    }
  ]

  const seedUserSkills = [
    {
      userId: 1,
      currentSkillsId: 1,
      skillsInterestedInId: 2
    },
    {
      userId: 3,
      currentSkillsId: 2,
      skillsInterestedInId: 3
    },
    {
      userId: 2,
      currentSkillsId: 3,
      skillsInterestedInId: 1
    }
  ]

  await Promise.all(
    seedSkills.map(skill => {
      return Skill.create(skill)
    })
  )

  await Promise.all(
    seedUser.map(user => {
      return User.create(user)
    })
  )
  await Promise.all(
    seedUserSkills.map(userSkill => {
      return UserSkills.create(userSkill)
    })
  )

  console.log(`seeded ${seedSkills.length} skill`)
  console.log(`seeded ${seedUser.length} users`)
  console.log(`seeded ${seedUserSkills.length} UserSkills`)
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
