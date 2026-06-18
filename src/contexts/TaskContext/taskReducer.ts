import { TaskStateModel } from '../../models/TaskStateModel';
import { fortmatSecondsToMinuts } from '../../utils/formatSecondsToMinuts';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionModel, TaskActionTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask.durationInMinuts * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: fortmatSecondsToMinuts(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      //     ...prevState,
      //     activeTask: null,
      //     secondsRemaining: 0,
      //     formattedSecondsRemaining: '00:00',
      //     tasks: prevState.tasks.map(task => {
      //       if (prevState.activeTask && prevState.activeTask.id === task.id) {
      //         return { ...task, interruptDate: Date.now() };
      //       }
      //       return task;
      //     }),
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET: {
      return state;
    }
  }

  return state;
}
