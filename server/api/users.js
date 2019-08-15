const router = require('express').Router()

const {User, Skill, CurrentSkills, SkillsInterestedIn} = require('../db/models')
const {formatUserSkillCapture} = require('./utils')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
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
        'bio',
        'createdAt',
        'calendlyUsername'
      ],
      include: [
        {
          model: SkillsInterestedIn,
          include: [
            {
              model: Skill
            }
          ]
        },
        {
          model: CurrentSkills,
          include: [
            {
              model: Skill
            }
          ]
        }
      ]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  const curUserId = req.params.userId
  try {
    const curUserData = await User.findOne({
      where: {
        id: curUserId
      },
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
        'bio',
        'createdAt',
        'calendlyUsername'
      ],
      include: [
        {
          model: SkillsInterestedIn,
          include: [
            {
              model: Skill
            }
          ]
        },
        {
          model: CurrentSkills,
          include: [
            {
              model: Skill
            }
          ]
        }
      ]
    })
    res.json(curUserData)
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
    currentSkills,
    calendlyUsername
  } = req.body
  const userId = req.params.id
  try {
    const [numberOfAffectedUserRows, userInstance] = await User.update(
      {
        gender,
        currentCompany,
        currentPosition,
        bio,
        calendlyUsername,
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
