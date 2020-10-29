/* global describe beforeEach it */

const {expect} = require('chai')
const supertest = require('supertest')
const db = require('../db')
const app = require('../index')
const agent = supertest.agent(app)
const User = db.model('user')
const seed = require('../../script/seed')

describe('Quiz routes', () => {
  let phurba = {username: 'phurba', password: '123'}
  let quiz = {
    quizId: 1,
    questionAnswers: {
      1: 1,
      2: 2,
      3: 2,
      4: 4,
      5: 2,
      6: 1,
      7: 2,
      8: 1,
      9: 2,
      10: 4
    },
    percentage: 100
  }

  beforeEach(async () => {
    return db.sync({force: true})
  })

  describe('/api/quiz/ retrieves all quizzes of logged in user', () => {
    beforeEach(async () => {
      await seed()
      await User.create(phurba)
    })
    it('needs a user to be accessed - NOT LOGGED IN', async () => {
      await agent.get('/api/quiz').expect(401)
    })
    it('gets users quiz - LOGGED IN', async () => {
      await agent
        .post('/auth/login')
        .send(phurba)
        .expect(200)
      await agent.post('/api/quiz').expect(200)
      await agent
        .post('/api/quiz/submit')
        .send(quiz)
        .expect(200)
      await agent
        .get('/api/quiz')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.a('array')
          expect(res.body.length).to.be.equal(1)
        })
    })
  }) // end describe('/api/quiz')
  describe('/api/quiz/:id retrieves a logged in users quiz', () => {
    beforeEach(async () => {
      await seed()
      await User.create(phurba)
    })
    it('needs a user to be accessed - NOT LOGGED IN', async () => {
      await agent.get('/api/quiz/1').expect(401)
    })
    it('gets users quiz - LOGGED IN', async () => {
      await agent
        .post('/auth/login')
        .send(phurba)
        .expect(200)
      await agent.post('/api/quiz').expect(200)
      await agent
        .post('/api/quiz/submit')
        .send(quiz)
        .expect(200)

      await agent
        .get('/api/quiz/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.a('object')
          expect(res.body.userId).to.be.equal(3)
          expect(res.body.questions.length).to.be.equal(10)
        })
    })
  }) // end describe('/api/quiz/:id')

  describe('POST /api/quiz creates a new quiz if ones not already', () => {
    beforeEach(async () => {
      await seed()

      await User.create(phurba)
    })
    it('needs a user to be accessed - NOT LOGGED IN', async () => {
      await agent.post('/api/quiz/').expect(401)
    })
    it('gets users quiz - LOGGED IN', async () => {
      await agent
        .post('/auth/login')
        .send(phurba)
        .expect(200)
      await agent.post('/api/quiz').expect(200)
      await agent.post('/api/quiz').expect(200)
      await agent
        .post('/api/quiz/submit')
        .send(quiz)
        .expect(200)

      await agent
        .post('/api/quiz/')
        .send(quiz)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.a('object')
          expect(res.body.percentage).to.be.equal(null)
          expect(res.body.id).to.be.equal(2)
          expect(res.body.userId).to.be.equal(3)
        })
    })
  }) // end describe('POST /api/quiz')
}) // end describe('Questions routes')
