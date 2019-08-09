const router = require('express').Router()

const {Skill, User, SkillsInterestedIn, CurrentSkills} = require('../db/models')
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

router.get('/currentSkills', async (req, res, next) => {
  try {
    const currentSkill = await Skill.findAll({
      include: [
        {
          model: User,
          as: CurrentSkills
        }
      ]
    })
    res.json(currentSkill)
  } catch (err) {
    next(err)
  }
})

router.get('/currentSkills/:idSkill', async (req, res, next) => {
  try {
    const id = req.params.idSkill
    const currentSkill = await Skill.findByPk(id, {
      include: [
        {
          model: User,
          as: CurrentSkills
        }
      ]
    })
    if (currentSkill) {
      res.json(currentSkill)
    } else {
      res.sendStatus(404).json({})
    }
  } catch (err) {
    next(err)
  }
})

router.get('/skillsInterestedIn', async (req, res, next) => {
  try {
    const skillsInterested = await Skill.findAll({
      include: [
        {
          model: SkillsInterestedIn,
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

router.get('/skillsInterestedIn/:idSkill', async (req, res, next) => {
  try {
    const id = req.params.idSkill
    const skillInterested = await Skill.findByPk(id, {
      include: [
        {
          model: User
        }
      ]
    })
    if (skillInterested) {
      res.json(skillInterested)
    } else {
      res.sendStatus(404).json({})
    }
  } catch (err) {
    next(err)
  }
})
