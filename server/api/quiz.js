const router = require('express').Router()
const {Quiz} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    // get all quizzes by logged in user
    console.log(req.user)
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
