import { query } from '../../shared/db.client'
import { Identifier } from '../../shared/types'
import { ICreateTaskListDTO } from './task-list.interface'

export const createTaskList = async (taskListDTO: ICreateTaskListDTO) => {
  let result
  try {
    result = await query(`INSERT INTO task_list (id, title)
    VALUES (default,$1);`, [taskListDTO.title])
  } catch (e) {
    result = { error: 'Unable to create task list' }
  }

  return result
}

export const getOneTaskList = async (taskListId: Identifier) => {
  let result
  try {
    result = await query('SELECT * FROM task_list WHERE task_list.id = $1', [taskListId])
  } catch (e) {
    result = { error: 'Unable to get task_list' }
  }

  return result
}

export const getAllTaskLists = async () => {
  let result
  try {
    result = await query('SELECT * FROM task_list')
  } catch (e) {
    result = { error: 'Unable to get all task_lists' }
  }
  return result
}

export const deleteOneTaskList = async (taskListId: Identifier) => {
  let result
  try {
    result = await query('DELETE FROM task_list WHERE id = $1', [taskListId])
  } catch (e) {
    result = { error: 'Unable to delete task_list' }
  }

  return result
}
