import { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  durationInMinuts: number;
  startDate: number;
  completeDate: number;
  interruptDate: number;
  type: keyof TaskStateModel['config'];
};
