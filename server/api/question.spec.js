/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const seed = require('../../script/seed')

describe('Question routes', () => {
  beforeEach(async () => {
    return db.sync({force: true})
  })

  describe('/api/questions/ retrieves 10 questions', () => {
    beforeEach(async () => {
      await seed()
    })
    it('GET /api/questions', async () => {
      const res = await request(app)
        .get('/api/questions')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.equal(10)
    })
  }) // end describe('/api/questions')
}) // end describe('Questions routes')
