import { Context } from 'koa'
import Router from 'koa-router'
import { createTask, deleteTask, getAllTasks, getOneTask } from './task.service'
import { ICreateTaskDTO } from './task.interface'

const router = new Router()

router.post('/task', async (ctx: Context) => {
  const body = ctx.request.body as Record<string, any> || {}
  const taskDTO: ICreateTaskDTO = {
    title: body?.title,
    description: body?.description
  }

  await createTask(taskDTO)

  ctx.body = {
    ok: true
  }
})

router.get('/task', async (ctx: Context) => {
  const data = await getAllTasks()
  console.info({ data })
  ctx.body = {
    ok: true,
    data
  }
})

router.get('/task/:id', async (ctx: Context) => {
  const [,, taskId] = ctx.path.split('/')

  const data = await getOneTask(+taskId)
  ctx.body = {
    ok: true,
    data
  }
})

router.del('/task/:id', async (ctx: Context) => {
  const [,, taskId] = ctx.path.split('/')

  await deleteTask(+taskId)

  ctx.body = {
    ok: true
  }
})

export default router
