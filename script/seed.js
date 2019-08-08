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
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg'
      //   gender: 'Female',
      //   company: 'Essteem',
      //   position: 'Full Stack Software Developer',
      //   dateJoinedCompany: Date.now(),
      //   blurb: '1902 GH-NY Graduate'
    }
    // {
    //   firstName: 'Tal',
    //   lastName: 'Luigi',
    //   fullName: 'Tal Luigi',
    //   imgUrl:
    //     'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
    //   gender: 'Male',
    //   company: 'Essteem',
    //   position: 'Full Stack Software Developer',
    //   dateJoinedCompany: Date.now(),
    //   blurb: '1904 FSA-NY Graduate'
    // },
    // {
    //   firstName: 'Sam',
    //   lastName: 'Peach',
    //   fullName: 'Sam Peach',
    //   imgUrl:
    //     'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
    //   gender: 'Male',
    //   company: 'Essteem',
    //   position: 'Full Stack Software Developer',
    //   dateJoinedCompany: Date.now(),
    //   blurb: '1904 FSA-NY Graduate'
    // },
    // {
    //   firstName: 'Arianna',
    //   lastName: 'Choza',
    //   fullName: 'Arianna Choza',
    //   imgUrl:
    //     'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
    //   gender: 'Female',
    //   company: 'Essteem',
    //   position: 'Front End Software Developer',
    //   dateJoinedCompany: Date.now(),
    //   blurb: 'GA Graduate'
    // },
    // {
    //   firstName: 'Jocelyn',
    //   lastName: 'Jeriah',
    //   fullName: 'Jocelyn Jeriah',
    //   imgUrl:
    //     'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
    //   gender: 'Female',
    //   company: 'Essteem',
    //   position: 'Full Stack Software Developer',
    //   dateJoinedCompany: Date.now(),
    //   blurb: 'GA Student'
    // },
    // {
    //   firstName: 'Linda',
    //   lastName: 'Saraguro',
    //   fullName: 'Linda Saraguro',
    //   imgUrl:
    //     'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
    //   gender: 'Female',
    //   company: 'Essteem',
    //   position: 'Full Stack Software Developer',
    //   dateJoinedCompany: Date.now(),
    //   blurb: '1902 GH-NY Graduate'
    // }
  ]

  const seedUserSkills = [
    {
      userId: 1,
      currentSkillsId: 1,
      skillsInterestedInId: 2
    },
    {
      userId: 1,
      currentSkillsId: 2,
      skillsInterestedInId: 3
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
