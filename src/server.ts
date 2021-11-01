import app from './app'
import config from './shared/config'

const server = app.listen(config.port)

console.log(`Started server on port ${config.port}`)

server.on('error', console.error)
