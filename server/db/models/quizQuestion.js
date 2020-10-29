const Sequelize = require('sequelize')
const db = require('../db')

const QuizQuestion = db.define('quizQuestion', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quizId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false
  },
  userChoice: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = QuizQuestion
