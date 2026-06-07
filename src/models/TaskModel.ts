export type TaskModel = {
  id: string;
  name: string;
  durationInMinuts: number;
  startDate: number;
  completeDate: number;
  interruptDate: number;
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';  
};
