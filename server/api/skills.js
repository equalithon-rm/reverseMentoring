const router = require('express').Router()
const {
  Skill,
  MenteeSkills,
  MentorsSkills,
  Mentor,
  Mentee
} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const skillsList = await Skill.findAll({
      atributes: ['id', 'name']
    })
    res.json(skillsList)
  } catch (err) {
    next(err)
  }
})

//Return all the Skills for relation Mentees - MenteeSkill table
router.get('/menteesSkills', async (req, res, next) => {
  try {
    const menteeSkills = await Skills.findAll(
      {
        atributes: ['id', 'name']
      },
      {
        include: [
          {
            model: Mentee,
            atributes: ['id', 'firstName']
          },
          {
            model: Skill,
            atributes: ['id', 'name']
          }
        ]
      }
    )
    res.json(menteeSkills)
  } catch (err) {
    next(err)
  }
})

//Return all the Skills for relation Mentees - MenteeSkill table
router.get('/mentees', async (req, res, next) => {
  try {
    const menteeSkills = await MenteeSkills.findAll(
      {
        atributes: ['id', 'menteeId', 'skillId']
      },
      {
        include: [
          {
            model: Mentee,
            atributes: ['id', 'firstName']
          },
          {
            model: Skill,
            atributes: ['id', 'name']
          }
        ]
      }
    )
    res.json(menteeSkills)
  } catch (err) {
    next(err)
  }
})

/// Filter al the Mentees with Skill ID
router.get('/mentees/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const menteeSkills = await MenteeSkills.findAll(
      {
        where: {
          skillId: id
        }
      },
      {
        include: [
          {
            model: Skill,
            attributes: ['name']
          },
          {
            model: Mentor,
            attributes: ['firstName']
          }
        ]
      }
    )
    if (menteeSkills) {
      res.json(menteeSkills)
    } else {
      res.sendStatus(404).json({})
    }
  } catch (err) {
    next(err)
  }
})

//Return all the Skills for relation Mentors - MenteeSkill table
router.get('/mentors', async (req, res, next) => {
  try {
    const mentorSkills = await MentorsSkills.findAll(
      {
        atributes: ['id', 'mentorId', 'MentorId']
      },
      {
        include: [
          {
            model: Mentee,
            atributes: ['id', 'firstName']
          },
          {
            model: Skill,
            atributes: ['id', 'name']
          }
        ]
      }
    )
    res.json(mentorSkills)
  } catch (err) {
    next(err)
  }
})

/// Filter al the Mentees with Skill ID
router.get('/mentors/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const mentorSkills = await MentorsSkills.findAll(
      {
        where: {
          skillId: id
        }
      },
      {
        include: [
          {
            model: Skill,
            attributes: ['name']
          }
        ]
      }
    )
    if (mentorSkills) {
      res.json(mentorSkills)
    } else {
      res.sendStatus(404).json({})
    }
  } catch (err) {
    next(err)
  }
})
