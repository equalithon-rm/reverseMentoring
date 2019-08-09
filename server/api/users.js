const router = require('express').Router()
const {User, UserSkills} = require('../db/models')
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

    // const skillsData = formatUserSkillCapture(
    //   userId,
    //   skillsInterestedIn,
    //   currentSkills
    // )
    const skillsData = [
      {userId: userId, skillId: 3},
      {userId: userId, skillId: 4},
      {userId: userId, skillId: 5}
    ]
    console.log('>>> ', skillsData)
    const [
      numberOfAffectedSkillsRows,
      skillsInstance
    ] = await UserSkills.bulkCreate(skillsData, {returning: true})

    res.json(userInstance)
  } catch (err) {
    next(err)
  }
})
