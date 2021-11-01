import { query } from '../../shared/db.client'
import { Identifier } from '../../shared/types'
import { ICreateTaskDTO } from './task.interface'

export const createTask = async (taskDTO: ICreateTaskDTO) => {
  let result
  try {
    result = await query(`INSERT INTO task (id, title, description)
    VALUES (default, $1, $2);`, [taskDTO.title, taskDTO.description])
  } catch (e) {
    console.log(taskDTO, e)
    result = { e, error: 'Unable to get all tasks' }
  }

  return result
}

export const getOneTask = async (taskId: Identifier) => {
  let result
  try {
    result = await query('SELECT * FROM task WHERE id = $1', [taskId])
  } catch (e) {
    result = { error: 'Unable to get task' }
  }

  return result
}

export const getAllTasks = async () => {
  let result
  try {
    result = await query('SELECT * FROM task')
  } catch (e) {
    result = { e, error: 'Unable to get all tasks' }
  }
  return result
}

export const deleteTask = async (taskId: Identifier) => {
  let result
  try {
    result = await query('DELETE FROM task WHERE id = $1', [taskId])
  } catch (e) {
    result = { error: 'Unable to get all tasks' }
  }

  return result
}
