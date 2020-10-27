const Sequelize = require('sequelize')
const db = require('../db')

const Quiz = db.define('quiz', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  percentage: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Quiz
