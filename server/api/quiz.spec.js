/* global describe beforeEach it */

const {expect} = require('chai')
const supertest = require('supertest')
const db = require('../db')
const app = require('../index')
const agent = supertest.agent(app)
const seed = require('../../script/seed')

describe('Quiz routes', () => {
  let cody = {username: 'cody', password: '123'}

  beforeEach(async () => {
    return db.sync({force: true})
  })

  describe('/api/quiz/ retrieves all quizzes of logged in user', () => {
    beforeEach(async () => {
      await seed()
    })
    it('needs a user to be accessed - NOT LOGGED IN', async () => {
      await agent.get('/api/quiz').expect(401)
    })
    it('gets users quiz - LOGGED IN', async () => {
      await agent.post('/auth/login').send(cody)
      await agent
        .get('/api/quiz')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.a('array')
          expect(res.body.length).to.be.equal(2)
        })
    })
  }) // end describe('/api/quiz')
  describe('/api/quiz/:id retrieves a logged in users quiz', () => {
    beforeEach(async () => {
      await seed()
    })
    it('needs a user to be accessed - NOT LOGGED IN', async () => {
      await agent.get('/api/quiz/1').expect(401)
    })
    it('gets users quiz - LOGGED IN', async () => {
      await agent.post('/auth/login').send(cody)
      await agent
        .get('/api/quiz/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.a('object')
          expect(res.body.id).to.be.equal(1)
          expect(res.body.userId).to.be.equal(1)
          expect(res.body.percentage).to.be.equal(90)
          expect(res.body.questions.length).to.be.equal(10)
        })
    })
  }) // end describe('/api/quiz')
}) // end describe('Questions routes')
