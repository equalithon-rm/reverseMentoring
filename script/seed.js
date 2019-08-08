'use strict'

const db = require('../server/db')
const {
  Skill,
  Mentor,
  Mentee,
  MentorsSkills,
  MenteeSkills
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const skills = [
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

  const mentors = [
    {
      firstName: 'Macarena',
      lastName: 'Carreno',
      fullName: 'Macarena Carreno',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: '1902 GH-NY Graduate'
    },
    {
      firstName: 'Tal',
      lastName: 'Luigi',
      fullName: 'Tal Luigi',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: '1904 FSA-NY Graduate'
    },
    {
      firstName: 'Sam',
      lastName: 'Peach',
      fullName: 'Sam Peach',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: '1904 FSA-NY Graduate'
    },
    {
      firstName: 'Arianna',
      lastName: 'Choza',
      fullName: 'Arianna Choza',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Front End Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: 'GA Graduate'
    },
    {
      firstName: 'Jocelyn',
      lastName: 'Jeriah',
      fullName: 'Jocelyn Jeriah',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: 'GA Student'
    },
    {
      firstName: 'Linda',
      lastName: 'Saraguro',
      fullName: 'Linda Saraguro',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Female',
      company: 'Essteem',
      position: 'Full Stack Software Developer',
      dateJoinedCompany: Date.now(),
      blurb: '1902 GH-NY Graduate'
    }
  ]

  const mentorsSkills = [
    {
      mentorId: 1,
      skillId: 1
    },
    {
      mentorId: 1,
      skillId: 2
    },
    {
      mentorId: 2,
      skillId: 2
    },
    {
      mentorId: 2,
      skillId: 3
    },
    {
      mentorId: 3,
      skillId: 4
    },
    {
      mentorId: 3,
      skillId: 5
    }
  ]

  const mentees = [
    {
      firstName: 'Wonder',
      lastName: 'Woman',
      fullName: 'Wonder Woman',
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
      fullName: 'Captain Marvel',
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
      fullName: 'The Wasp',
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
      fullName: 'Black Window',
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
      fullName: 'Captain America',
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
      fullName: 'Iron Man',
      imgUrl:
        'https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg',
      gender: 'Male',
      company: 'Essteem',
      position: 'Full Stack Software Developer in Training',
      dateJoinedCompany: Date.now(),
      blurb: '1904 FSA-NY Graduate'
    }
  ]

  const menteeSkills = [
    {
      menteeId: 1,
      skillId: 1
    },
    {
      menteeId: 1,
      skillId: 2
    },
    {
      menteeId: 2,
      skillId: 2
    },
    {
      menteeId: 2,
      skillId: 3
    },
    {
      menteeId: 3,
      skillId: 4
    },
    {
      menteeId: 3,
      skillId: 5
    },
    {
      menteeId: 3,
      skillId: 6
    },
    {
      menteeId: 3,
      skillId: 7
    },
    {
      menteeId: 3,
      skillId: 8
    }
  ]

  await Promise.all(
    skills.map(skill => {
      return Skill.create(skill)
    })
  )

  await Promise.all(
    mentees.map(mentee => {
      return Mentee.create(mentee, {include: [Skill]})
    })
  )
  await Promise.all(
    menteeSkills.map(menteeSkill => {
      return MenteeSkills.create(menteeSkill)
    })
  )

  await Promise.all(
    mentors.map(mentor => {
      return Mentor.create(mentor)
    })
  )

  await Promise.all(
    mentorsSkills.map(mentorsSkill => {
      return MentorsSkills.create(mentorsSkill)
    })
  )

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
