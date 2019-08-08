const router = require('express').Router()
const {User, UserSkills} = require('../db/models')
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
    /* TO DO: create a util function that merges the skillsInterestedIn 
    and currentSkills array in an object with the userId e.g {userId: 5, skillsInterestedInId: 6, skillId: 7}
    this objects then need to be pushed into an array.
    const dataArr = []
    const [
      numberOfAffectedSkillsRows,
      skillsInstance
    ] = await UserSkills.bulkCreate(data, {returning: true})
    */

    res.json(userInstance)
  } catch (err) {
    next(err)
  }
})
