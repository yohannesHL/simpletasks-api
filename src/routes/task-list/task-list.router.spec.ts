import * as request from 'supertest'
import app from '../../index'
// import { query } from '../../shared/db.client'

// jest.mock('../../src/shared/db.client')

describe('TaskList API (e2e))', () => {
  it('/task-list (GET)', async () => {
    // jest.fn(query).mockResolvedValueOnce([1, 2, 3])

    return await request.default(app.callback())
      .get('/task-list')
      .expect(200)
      .then(res => {
        expect(res.body.ok).toBe(true)
        expect(res.body).toBeTruthy()
      })
  })

  it('/task-list/:id/task (GET)', async () => {
    // jest.fn(query).mockResolvedValueOnce([1, 2, 3])

    return await request.default(app.callback())
      .get('/task-list/1/task')
      .expect(200)
      .then(res => {
        console.log({data: res.body})
        expect(res.body.ok).toBe(true)
        expect(res.body).toBeTruthy()
      })
  })
})
