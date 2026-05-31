import { Container } from './components/container';
//import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaltInput } from './components/DefaltInput';

import './styles/theme.css'
import './styles/global.css'

export function App() {
  console.log(19)

  return (
    <>
      <Container><Logo /></Container>
      <Container><Menu /></Container>
      <Container><CountDown /></Container>
      <Container>
        <form className='form' action="">
          <div className='form-row'>
            <DefaltInput id='MeuInput' type='text' />
          </div>

          <div className="form-row">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="form-row">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className="form-row">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}