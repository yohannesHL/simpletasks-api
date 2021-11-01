import { Pool } from 'pg'
import config from './config'

const pool = new Pool({ ...config.db })

export const query = async (query: string, params?: any) => {
  const start = Date.now()
  const res = await pool.query(query, params)
  const duration = Date.now() - start
  console.log('executed query', { query, params, duration, rows: res.rowCount })

  return res.rows
}
