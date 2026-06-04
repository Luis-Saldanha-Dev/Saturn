import styles from './styles.module.css';
export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Descubra como funciona a técnica Pomodoro. 🍅</a>
      <a href=''>
        Saturn Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
