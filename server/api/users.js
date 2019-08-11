const router = require('express').Router()

const {
  User,
  Skills,
  CurrentSkills,
  SkillsInterestedIn
} = require('../db/models')
const {formatUserSkillCapture} = require('./utils')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll(
      {
        attributes: [
          'id',
          'firstName',
          'lastName',
          'fullName',
          'gender',
          'email',
          'imgUrl',
          'currentCompany',
          'currentPosition',
          'dateJoinedCurrentCompany',
          'bio'
        ]
      },
      {
        include: [
          {
            model: Skills,
            attributes: ['name']
          }
        ]
      }
    )
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const users = await User.findOne(
      {
        where: {
          id: req.params.id
        }
      },
      {
        include: [
          {
            model: CurrentSkills,
            attributes: ['name'],
            where: {
              userId: req.params.id
            }
          }
        ]
      }
    )
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  const {
    gender,
    currentCompany,
    currentPosition,
    bio,
    skillsInterestedIn,
    currentSkills
  } = req.body
  const userId = req.params.id
  try {
    const [numberOfAffectedUserRows, userInstance] = await User.update(
      {
        gender: gender,
        currentCompany: currentCompany,
        currentPosition: currentPosition,
        bio: bio,
        hasCompletedSignup: true
      },
      {
        where: {id: userId},
        returning: true,
        plain: true
      }
    )

    const currentSkillsData = formatUserSkillCapture(userId, currentSkills)
    const interestedInSkillsData = formatUserSkillCapture(
      userId,
      skillsInterestedIn
    )

    const [
      numberOfAffectedCurrRows,
      currInstance
    ] = await CurrentSkills.bulkCreate(currentSkillsData, {returning: true})

    const [
      numberOfAffectedInterRows,
      interInstance
    ] = await SkillsInterestedIn.bulkCreate(interestedInSkillsData, {
      returning: true
    })

    res.json(userInstance)
  } catch (err) {
    next(err)
  }
})
