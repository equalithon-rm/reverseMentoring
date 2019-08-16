'use strict'

const db = require('../server/db')
const {
  Skill,
  User,
  SkillsInterestedIn,
  CurrentSkills
} = require('../server/db/models')

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
      email: 'macarena@email.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: '1902 GH-NY Graduate',
      currentskills: [{skillId: 1}],
      SkillsInterestedIn: [{skillId: 2}]
    },
    {
      firstName: 'Linda',
      lastName: 'Saraguro',
      fullName: 'Linda Saraguro',
      email: 'linda@email.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: '1902 GH-NY Graduate',
      currentskills: [{skillId: 1}],
      SkillsInterestedIn: [{skillId: 2}]
    },
    {
      firstName: 'Jocelyn',
      lastName: 'Jeriah',
      fullName: 'Jocelyn Jeriah',
      email: 'jocelyn@email.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: 'GA Student',
      currentskills: [{skillId: 1}],
      SkillsInterestedIn: [{skillId: 2}]
    },
    {
      firstName: 'Sam',
      lastName: 'Peach',
      fullName: 'Sam Peach',
      email: 'sam@email.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: '1904 FSA-NY Graduate',
      currentskills: [{skillId: 1}],
      SkillsInterestedIn: [{skillId: 2}]
    }
  ]

  const seedCurrentSkills = [
    {
      userId: 1,
      skillId: 1
    },
    {
      userId: 1,
      skillId: 2
    },
    {
      userId: 2,
      skillId: 3
    },
    {
      userId: 2,
      skillId: 1
    },
    {
      userId: 3,
      skillId: 3
    },
    {
      userId: 4,
      skillId: 3
    }
  ]

  const seedSkillsInterestedin = [
    {
      userId: 1,
      skillId: 3
    },
    {
      userId: 1,
      skillId: 5
    },
    {
      userId: 2,
      skillId: 2
    },
    {
      userId: 2,
      skillId: 3
    },
    {
      userId: 3,
      skillId: 1
    },
    {
      userId: 4,
      skillId: 1
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
    seedCurrentSkills.map(currentSkill => {
      return CurrentSkills.create(currentSkill)
    })
  )
  await Promise.all(
    seedSkillsInterestedin.map(skillInterestedIn => {
      return SkillsInterestedIn.create(skillInterestedIn)
    })
  )

  console.log(`seeded ${seedSkills.length} skills`)
  console.log(`seeded ${seedUser.length} users`)
  console.log(`seeded ${seedCurrentSkills.length} user current skills`)
  console.log(
    `seeded ${seedSkillsInterestedin.length} user skills interested in`
  )

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
