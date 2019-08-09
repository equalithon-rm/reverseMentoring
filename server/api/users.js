const router = require('express').Router()
const {User, CurrentSkills, SkillsInterestedIn} = require('../db/models')
const {formatUserSkillCapture} = require('./utils')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
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
