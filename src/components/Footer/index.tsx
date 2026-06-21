import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';
export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Descubra como funciona a técnica Pomodoro. 🍅
      </RouterLink>
      <RouterLink href='/'>
        Saturn Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </RouterLink>
    </footer>
  );
}
