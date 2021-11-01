import { query } from '../../shared/db.client'
import { Identifier } from '../../shared/types'

export const createTaskListTask = async (taskListId: Identifier, taskId: Identifier) => {
  let result
  try {
    result = await query(`INSERT INTO task_list_task (task_list_id, task_id)
    VALUES ($1, $2);`, [taskListId, taskId])
  } catch (e) {
    result = { error: 'Unable to create task list task' }
  }

  return result
}

export const getTaskListTasks = async (taskListId: Identifier) => {
  let result
  try {
    result = await query(`SELECT tl.id,
    tl.title AS task_list_title,
    t.title,
    t.id AS task_id,
    t.created_at,
    t.updated_at
    FROM task as t
    JOIN task_list_task AS tlt ON tlt.task_id = t.id
    JOIN task_list AS tl ON tlt.task_list_id = tl.id
    WHERE tlt.task_list_id = $1`, [taskListId])
  } catch (e) {
    console.log(e)
    result = { error: 'Unable to delete task_list' }
  }

  return result
}

export const deleteOneTaskListTask = async (taskListId: Identifier, taskId: Identifier) => {
  let result
  try {
    result = await query('DELETE FROM task_list_task WHERE task_list_id = $1 AND task_id = $2;', [taskListId, taskId])
  } catch (e) {
    result = { error: 'Unable to delete task_list task' }
  }

  return result
}
