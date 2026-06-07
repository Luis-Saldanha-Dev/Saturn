import { PlayCircleIcon } from 'lucide-react';
import { DefaultButton } from '../DefaltButton';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { HomeProps } from '../../pages/Home';

export function MainForm({ state }: HomeProps) {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Task:'
          id='meuInput'
          type='text'
          placeholder='Digite sua task'
        />
      </div>
      <div className='formRow'>
        <p>Próximo ciclo é de {state.config.workTime}min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
