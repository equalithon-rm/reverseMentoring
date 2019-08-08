const router = require('express').Router()
const {Mentee, Skill} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const mentees = await Mentee.findAll(
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
    res.json(mentees)
  } catch (err) {
    next(err)
  }
})

router.get('/:menteeId', async (req, res, next) => {
  try {
    const id = req.params.menteeId
    const singleMentee = await Mentee.findByPk(id, {
      include: [
        {
          model: Skill,
          attributes: ['name']
        }
      ]
    })
    if (singleMentee) {
      res.json(singleMentee)
    } else {
      res.sendStatus(404).json({})
    }
  } catch (err) {
    next(err)
  }
})

router.get('/skill/:skillId', async (req, res, next) => {
  try {
    console.log(req.params.skillId)
    const skillId = req.params.skillId
    const Mentees = await Mentee.findByPk(skillId, {
      include: [
        {
          model: Skill,
          attributes: ['name']
        }
      ]
    })
    if (Mentees) {
      res.json(Mentees)
    } else {
      res.sendStatus(404).json({})
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const {
    gender,
    mentorOrMentee,
    skillsInterestedIn,
    currentCompany,
    currentPosition,
    bio,
    currentSkills
  } = req.body
  try {
    const newMentee = await Mentee.create(req.body)
    res.json(newMentee)
  } catch (error) {
    next(error)
  }
})

router.put('/mentees/:id', async (req, res, next) => {
  try {
    const mentee = await Mentee.findByPk(req.params.id)
    if (mentee) {
      const updatedMentee = await Mentee.update(req.body, {
        where: {id: req.params.id},
        returning: true,
        plain: true
      })
      res.json(updatedMentee[1])
    } else {
      res.sendStatus(500).json({})
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/mentees/:id', async (req, res, next) => {
  try {
    await Mentee.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204).json({})
  } catch (error) {
    next(error)
  }
})
