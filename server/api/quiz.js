const router = require('express').Router()
const {Quiz, QuizQuestion, Option, Question} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    // get all quizzes by logged in user
    if (req.user) {
      const quizzes = await Quiz.findAll({
        where: {
          userId: req.user.id,
          percentage: {[Op.ne]: null}
        },
        order: [['id', 'DESC']]
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
        where: {id: req.params.id, userId: req.user.id},
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

router.post('/', async (req, res, next) => {
  try {
    if (req.user) {
      let active = await Quiz.findOne({
        where: {
          userId: req.user.id,
          percentage: null
        }
      })
      if (!active) {
        let quiz = await Quiz.create({
          userId: req.user.id,
          percentage: null
        })
        if (quiz) {
          res.json(quiz)
        } else {
          res.sendStatus(204)
        }
      } else {
        res.json(active)
      }
    } else {
      res.sendStatus(401)
    }
  } catch (error) {
    next(error)
  }
})

router.post('/submit', async (req, res, next) => {
  try {
    const {quizId, questionAnswers, percentage} = req.body

    for (let questionId in questionAnswers) {
      let userChoice = questionAnswers[questionId]
      await QuizQuestion.create({quizId, questionId, userChoice})
    }

    let quiz = await Quiz.findOne({where: {id: quizId}})
    quiz.percentage = percentage
    quiz.save()
    res.json('Submitted Quiz')
  } catch (error) {
    next(error)
  }
})
