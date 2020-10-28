const Sequelize = require('sequelize')
const db = require('../db')

const Quiz = db.define('quiz', {
  percentage: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

module.exports = Quiz
