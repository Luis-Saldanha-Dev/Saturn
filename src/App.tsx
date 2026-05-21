import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

import './styles/theme.css'
import './styles/global.css'

export function App() {
  console.log(19)

  return (
    <>
    <Container><Logo /></Container>
    <Heading>Ti</Heading>
    <Container>Olá</Container>
    </>
  )
}