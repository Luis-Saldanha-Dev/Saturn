import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
//import { useState } from 'react';

export function MainForm() {
  const { setState } = useTaskContext();

  // const [taskName, setTaskName] = useState('')
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    //Salva e verifica: Current-Valor Input .Value valor dentro do imput e trim retira os espacos ao final e inicio (' exemplo ') = ('exemplo')
    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }
    const newTask: TaskModel = {
      //importar uma biblioteca de ID/s posteriormente
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      durationInMinuts: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.durationInMinuts * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: 1, // Conferir
        secondsRemaining, // Conferir
        formattedSecondsRemaining: '00:00', // Conferir
        tasks: [...prevState.tasks, newTask],
        config: { ...prevState.config },
      };
    });
  }

  return (
    <form onSubmit={handleCreateTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput}

          // value={taskName}
          // onChange={e => setTaskName(e.target.value)}
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
