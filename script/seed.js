'use strict'

const db = require('../server/db')
const {
  User,
  Question,
  Option,
  Quiz,
  QuizQuestion
} = require('../server/db/models')
const questions = require('./questions')
const options = require('./options')
const quizzes = require('./quizzes')
const quizQuestions = require('./quizQuestions')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all([
    User.create({username: 'cody', password: '123'}),
    User.create({username: 'murphy', password: '123'})
  ])

  await Promise.all(
    questions.map(question => {
      return Question.create(question)
    })
  )

  await Promise.all(
    options.map(option => {
      return Option.create(option)
    })
  )

  await Promise.all(
    quizzes.map(quiz => {
      return Quiz.create(quiz)
    })
  )

  await Promise.all(
    quizQuestions.map(quizQuestion => {
      return QuizQuestion.create(quizQuestion)
    })
  )

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
