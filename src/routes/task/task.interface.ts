import { Identifier } from '../../shared/types'

export interface ITaskDTO {
    id: Identifier,
    userId: Identifier,
    createdAt: Date,
    updatedAt: Date,
    title: string,
    description: string,
}

export interface ICreateTaskDTO {
  title: string,
  description: string
}
