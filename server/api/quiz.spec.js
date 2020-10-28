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
    it('gets all users owned stocks - LOGGED IN', async () => {
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
}) // end describe('Questions routes')
