const router = require('express').Router()
const {Sequelize} = require('sequelize')
const {Question, Option} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    // get 10 random questions and eager load all the options
    const questions = await Question.findAll({
      order: [[Sequelize.fn('RANDOM')]],
      limit: 10,
      include: {
        model: Option
      }
    })
    res.json(questions)
  } catch (err) {
    next(err)
  }
})
