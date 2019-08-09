'use strict'

const db = require('../server/db')
const {
  Skill,
  User,
  skillsInterestedIn,
  currentSkills
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
      email: 'macarena@macarena.com',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      currentCompany: 'Essteem',
      currentPosition: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      bio: '1902 GH-NY Graduate',
      currentskill: [{skillId: 1}],
      skillsInterestedIn: [{skillId: 2}]
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
      bio: '1904 FSA-NY Graduate',
      currentskill: [{skillId: 1}],
      skillsInterestedIn: [{skillId: 2}]
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
      bio: '1904 FSA-NY Graduate',
      currentskill: [{skillId: 1}],
      skillsInterestedIn: [{skillId: 2}]
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
      bio: 'GA Graduate',
      currentskill: [{skillId: 1}],
      skillsInterestedIn: [{skillId: 2}]
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
      bio: 'GA Student',
      currentskill: [{skillId: 1}],
      skillsInterestedIn: [{skillId: 2}]
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
      bio: '1902 GH-NY Graduate',
      currentskill: [{skillId: 1}],
      skillsInterestedIn: [{skillId: 2}]
    }
  ]

  const seedCurrentSkill = [
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

  const seedSkillInterestedOn = [
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
    seedCurrentSkill.map(currSkill => {
      return currentSkills.create(currSkill)
    })
  )
  await Promise.all(
    seedSkillInterestedOn.map(skillInt => {
      return skillsInterestedIn.create(skillInt)
    })
  )

  console.log(`seeded ${seedSkills.length} skill`)
  console.log(`seeded ${seedUser.length} users`)
  console.log(`seeded ${seedCurrentSkill.length} UserSkills`)
  console.log(`seeded ${seedSkillInterestedOn.length} UserSkills`)

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
