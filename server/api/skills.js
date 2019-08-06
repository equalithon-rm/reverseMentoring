const router = require('express').Router()
const {Skill} = require('../db/models')
module.exports = router

router.get('/array', async (req, res, next) => {
  try {
    const data = await Skill.findAll()
    const skillsArray = data.map(el => {
      el = {id: el.id, name: el.name}
      return el
    })
    res.json(skillsArray)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const skills = await Skill.findAll()
    res.json(skills)
  } catch (err) {
    next(err)
  }
})
