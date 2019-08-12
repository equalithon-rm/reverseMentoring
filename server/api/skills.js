const router = require('express').Router()

const {Skill, User, SkillsInterestedIn, CurrentSkills} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const skillsList = await Skill.findAll({
      attributes: ['id', 'name']
    })
    res.json(skillsList)
  } catch (err) {
    next(err)
  }
})

router.get('/currentSkills', async (req, res, next) => {
  try {
    const currentSkill = await Skill.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: User,
          as: CurrentSkills,
          attributes: [
            'id',
            'googleId',
            'firstName',
            'lastName',
            'fullName',
            'gender',
            'email',
            'imgUrl',
            'currentCompany',
            'currentPosition',
            'dateJoinedCurrentCompany',
            'bio',
            'hasCompletedSignup'
          ]
        }
      ]
    })
    res.json(currentSkill)
  } catch (err) {
    next(err)
  }
})

router.get('/currentSkills/:skillId', async (req, res, next) => {
  try {
    const id = req.params.skillId
    const currentSkill = await Skill.findByPk(id, {
      attributes: ['id', 'name'],
      include: [
        {
          model: User,
          as: CurrentSkills,
          attributes: [
            'id',
            'googleId',
            'firstName',
            'lastName',
            'fullName',
            'gender',
            'email',
            'imgUrl',
            'currentCompany',
            'currentPosition',
            'dateJoinedCurrentCompany',
            'bio',
            'hasCompletedSignup'
          ]
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
      attributes: ['id', 'name'],
      include: [
        {
          model: SkillsInterestedIn,
          include: [
            {
              model: User,
              attributes: [
                'id',
                'googleId',
                'firstName',
                'lastName',
                'fullName',
                'gender',
                'email',
                'imgUrl',
                'currentCompany',
                'currentPosition',
                'dateJoinedCurrentCompany',
                'bio',
                'hasCompletedSignup'
              ]
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

router.get('/skillsInterestedIn/:skillId', async (req, res, next) => {
  try {
    const id = req.params.skillId
    const skillInterested = await Skill.findByPk(id, {
      attributes: ['id', 'name'],
      include: [
        {
          model: User,
          attributes: [
            'id',
            'googleId',
            'firstName',
            'lastName',
            'fullName',
            'gender',
            'email',
            'imgUrl',
            'currentCompany',
            'currentPosition',
            'dateJoinedCurrentCompany',
            'bio',
            'hasCompletedSignup'
          ]
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
