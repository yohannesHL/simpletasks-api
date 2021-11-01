import Koa from 'koa'
import koaBody from 'koa-body'
import json from 'koa-json'
import task from './routes/task'
import taskList from './routes/task-list'

const app = new Koa()

app.use(json())
app.use(koaBody())
app.use(task.routes())
app.use(taskList.routes())

export default app
