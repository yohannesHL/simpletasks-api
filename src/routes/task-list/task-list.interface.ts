import { Identifier } from '../../shared/types';

export interface ITaskListDTO {
    id: Identifier,
    createdAt: Date,
    updatedAt: Date,
    title: string,
}

export interface ICreateTaskListDTO {
  title: string,
}
