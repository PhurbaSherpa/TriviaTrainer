const User = require('./user')
const Quiz = require('./quiz')
const Question = require('./question')
const Option = require('./option')
const QuizQuestion = require('./quizQuestion')

User.hasMany(Quiz)

Quiz.belongsToMany(Question, {through: QuizQuestion})
Question.belongsToMany(Quiz, {through: QuizQuestion})

Question.hasMany(Option)

module.exports = {
  User,
  Quiz,
  Question,
  Option,
  QuizQuestion
}
