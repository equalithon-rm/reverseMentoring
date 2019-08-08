const router = require('express').Router()
const {User} = require('../db/models')
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

router.put('/', async (req, res, next) => {
  const {
    gender,
    skillsInterestedIn,
    currentCompany,
    currentPosition,
    bio,
    currentSkills,
    id
  } = req.body
  try {
    const [numberOfAffectedRows, userInstance] = await User.update(
      {
        gender: gender,
        skillsInterestedIn: skillsInterestedIn,
        currentCompany: currentCompany,
        currentPosition: currentPosition,
        currentSkills: currentSkills,
        bio: bio,
        hasCompletedSignup: true
      },
      {
        where: {id: id},
        returning: true
      }
    )
    res.json(userInstance[0])
  } catch (err) {
    next(err)
  }
})
