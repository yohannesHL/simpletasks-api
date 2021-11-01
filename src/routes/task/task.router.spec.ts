import request from 'supertest'
import app from '../..'

describe('Tasks API (e2e)', () => {
  it('/task (GET)', () => {
    return request(app.callback())
      .get('/task')
      .expect(200)
      .then(res => {
        console.log({ data: res.body })
        expect(res.body.ok).toBe(true)
        expect(res.body).toBeTruthy()
      })
  })
})
