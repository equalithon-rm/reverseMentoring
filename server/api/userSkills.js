const router = require('express').Router()
const {User, Skill} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await userSkills.findAll(
      {
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: [
          'id',
          'firstName',
          'lastName',
          'imgUrl',
          'gender',
          'company',
          'position',
          'dateJoinedCompany',
          'blurb'
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
    res.json(mentors)
  } catch (err) {
    next(err)
  }
})

router.get('/:mentorId', async (req, res, next) => {
  try {
    const id = req.params.mentorId
    const singleMentor = await Mentor.findByPk(id, {
      include: [
        {
          model: Skill,
          attributes: ['name']
        }
      ]
    })
    if (singleMentor) {
      res.json(singleMentor)
    } else {
      res.sendStatus(404).json({})
    }
  } catch (err) {
    next(err)
  }
})

router.post('/mentors', async (req, res, next) => {
  try {
    const newMentor = await Mentor.create(req.body)
    res.json(newMentor)
  } catch (error) {
    next(error)
  }
})

router.put('/mentors/:id', async (req, res, next) => {
  try {
    const mentor = await Mentor.findByPk(req.params.id)
    if (mentor) {
      const updatedMentor = await Mentor.update(req.body, {
        where: {id: req.params.id},
        returning: true,
        plain: true
      })
      res.json(updatedMentor[1])
    } else {
      res.sendStatus(500).json({})
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/mentors/:id', async (req, res, next) => {
  try {
    await Mentor.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204).json({})
  } catch (error) {
    next(error)
  }
})
