const router = require('express').Router()
const {Quiz, QuizQuestion, Option, Question} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    // get all quizzes by logged in user
    if (req.user) {
      const quizzes = await Quiz.findAll({
        where: {userId: req.user.id}
      })
      if (quizzes) {
        res.json(quizzes)
      } else {
        res.sendStatus(204)
      }
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    if (req.user) {
      const questions = await Quiz.findOne({
        where: {id: req.params.id},
        include: {
          model: Question,
          include: {
            model: Option
          }
        }
      })
      if (questions) {
        res.json(questions)
      } else {
        res.sendStatus(204)
      }
    } else {
      res.sendStatus(401)
    }
  } catch (error) {
    next(error)
  }
})
