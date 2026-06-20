import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  //tips
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Próximo ciclo de trabalho: <b>{state.config.workTime}Min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso curto: <b>{state.config.shortBreakTime}Min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo descanso longo: <b>{state.config.longBreakTime}Min</b>
      </span>
    ),
  };
  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Hora de focar por <b>{state.config.workTime}Min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Pausa rápida de <b>{state.config.shortBreakTime}Min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Pausa merecida: <b>{state.config.longBreakTime}Min</b>
      </span>
    ),
  };

  return (
    <>
      {!!state.activeTask && tipsForNoActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForWhenActiveTask[nextCycleType]}
    </>
  );
}
