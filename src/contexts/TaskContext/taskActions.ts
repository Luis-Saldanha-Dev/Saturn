import { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET = 'RESET',
}

export type TaskActionWithPayload = {
  type: TaskActionTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionWithoutPayload =
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.RESET;
    };

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload;
