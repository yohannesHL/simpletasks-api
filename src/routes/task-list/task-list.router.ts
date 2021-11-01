import { Context } from 'koa'
import Router from 'koa-router'
import { createTaskListTask, deleteOneTaskListTask, getTaskListTasks } from './task-list-task.service'
import { ICreateTaskListDTO } from './task-list.interface'
import { createTaskList, deleteOneTaskList, getAllTaskLists, getOneTaskList } from './task-list.service'

const router = new Router()

router.post('/task-list', async (ctx: Context) => {
  const body = ctx.request?.body || {}
  const taskListDTO: ICreateTaskListDTO = {
    title: body?.title
  }

  await createTaskList(taskListDTO)
  ctx.body = { ok: true }
})

router.get('/task-list', async (ctx: Context) => {
  const data = await getAllTaskLists()
  console.info({ data })
  ctx.body = {
    ok: true,
    data
  }
})

router.get('/task-list/:id', async (ctx: Context) => {
  const [,, taskListId] = ctx.path.split('/')

  const data = await getOneTaskList(+taskListId)

  ctx.body = {
    ok: true,
    data
  }
})

router.del('/task-list/:id', async (ctx: Context) => {
  const [,, taskId] = ctx.path.split('/')

  await deleteOneTaskList(+taskId)

  ctx.body = {
    ok: true
  }
})

router.post('/task-list/:id/task', async (ctx: Context) => {
  const { path } = ctx
  const { taskId } = (ctx.request?.body || {})
  const [, , taskListId] = path.split('/')
  console.log({ path, taskListId, taskId })

  await createTaskListTask(+taskListId, +taskId)

  ctx.body = {
    ok: true
  }
})

router.get('/task-list/:id/task', async (ctx: Context) => {
  const { path } = ctx
  const taskListId = path.split('/')[2]
  console.log({ path, taskListId })

  const data = await getTaskListTasks(+taskListId)

  ctx.body = {
    ok: true,
    data
  }
})

router.del('/task-list/:id/task/:taskId', async (ctx: Context) => {
  const [, , taskListId,, taskId] = ctx.path.split('/')
  await deleteOneTaskListTask(+taskListId, +taskId)

  ctx.body = {
    ok: true
  }
})

export default router
