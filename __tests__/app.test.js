const request = require('supertest')
const app = require('../src/app')

describe(`'/' route`, function () {
  it('works', function () {
    return request(app)
      .get('/')
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.type).toEqual('text/html')
        expect(res.text).toEqual('Hello')
      })
  })
})


describe(`'/items' route`, function () {
  const baseUrl = '/items'

  it('works', function () {
    return request(app)
      .get(baseUrl)
      .then((res) => {
        expect(res.statusCode).toBe(200)
        expect(res.type).toEqual('application/json')
        expect(res.body).toEqual([])
      })
  })
})
