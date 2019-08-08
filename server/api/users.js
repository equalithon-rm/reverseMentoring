const router = require('express').Router()
const {User, Skill} = require('../db/models')
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
            model: Skill,
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

router.put('/:id', async (req, res, next) => {
  const {gender, currentCompany, currentPosition, bio} = req.body
  const userId = req.params.id
  try {
    const [numberOfAffectedRows, userInstance] = await User.update(
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
    res.json(userInstance)
  } catch (err) {
    next(err)
  }
})
