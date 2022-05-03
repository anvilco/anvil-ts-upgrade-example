import type { Response } from 'supertest'
import request from 'supertest'
import app from '../src/app'

describe(`'/' route`, function () {
  it('works', function () {
    return request(app)
      .get('/')
      .then((res: Response) => {
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
      .then((res: Response) => {
        expect(res.statusCode).toBe(200)
        expect(res.type).toEqual('application/json')
        expect(res.body).toEqual([])
      })
  })
})
