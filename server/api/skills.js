const router = require('express').Router()

const {Skill, User, UserSkills} = require('../db/models')
module.exports = router

router.get('/table', async (req, res, next) => {
  try {
    const skillsList = await Skill.findAll({
      atributes: ['id', 'name']
    })
    res.json(skillsList)
  } catch (err) {
    next(err)
  }
})

router.get('/array', async (req, res, next) => {
  try {
    const skillsList = await Skill.findAll({
      atributes: ['id', 'name']
    })
    res.json(
      skillsList.map(el => {
        return {id: el.id, name: el.name}
      })
    )
  } catch (err) {
    next(err)
  }
})

//Return all the Skills for relation Mentees - MenteeSkill table
router.get('/', async (req, res, next) => {
  try {
    const menteeSkills = await Skill.findAll({
      include: [
        {
          model: User,
          as: 'skillId'
        }
      ]
      //  order: [[UserSkills, User, 'firstName']],
    })
    res.json(menteeSkills)
  } catch (err) {
    next(err)
  }
})

//Return all the Skills for relation Mentees - MenteeSkill table
router.get('/:skillId', async (req, res, next) => {
  try {
    const id = req.params.skillId
    const mentorsSkills = await Skill.findByPk(id, {
      include: [
        {
          model: User,
          as: 'skillId',
          atributes: [
            'firstName',
            'lastName',
            'email',
            'imgUrl',
            'currentCompany',
            'currentPosition',
            'bio',
            'UserSkills'
          ]
        }
      ]
    })
    if (mentorsSkills) {
      res.json(mentorsSkills)
    } else {
      res.sendStatus(404).json({})
    }
  } catch (err) {
    next(err)
  }
})
