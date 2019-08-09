const router = require('express').Router()

const {Skill, User, skillsInterestedIn, currentSkills} = require('../db/models')
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

router.get('/currentSkills', async (req, res, next) => {
  try {
    const currentSkill = await Skill.findAll({
      include: [
        {
          model: User,
          as: currentSkills
        }
      ]
    })
    res.json(currentSkill)
  } catch (err) {
    next(err)
  }
})

router.get('/skillsInterestedIn', async (req, res, next) => {
  try {
    const skillsInterested = await Skill.findAll({
      include: [
        {
          model: skillsInterestedIn,
          include: [
            {
              model: User
            }
          ]
        }
      ]
    })
    res.json(skillsInterested)
  } catch (err) {
    next(err)
  }
})
