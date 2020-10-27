const Sequelize = require('sequelize')
const db = require('../db')

const Option = db.define('option', {
  option: {
    type: Sequelize.STRING,
    allowNull: false
  },
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  isCorrect: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Option
