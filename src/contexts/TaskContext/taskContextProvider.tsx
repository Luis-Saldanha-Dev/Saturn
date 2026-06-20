import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './taskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();
  worker.onmessage(e => {
    console.log(e.data);
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('Worker terminado por falta de active task');
      worker.terminate();
    }
    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>
  );
}
