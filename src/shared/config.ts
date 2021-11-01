import dotenv from 'dotenv'
import { IConfig } from './interfaces'

dotenv.config()

const env = process.env

export const config: IConfig = {
  port: parseInt(env.HTTP_PORT || '') || 3000,
  db: {
    port: parseInt(env.POSTGRES_PORT || ''),
    user: env.POSTGRES_USER || '',
    password: env.POSTGRES_PASSWORD || '',
    database: env.POSTGRES_DB || ''
  }
}

export default config
