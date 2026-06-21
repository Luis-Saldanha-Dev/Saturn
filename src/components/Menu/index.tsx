import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
    return storageTheme;
  });

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
      return nextTheme;
    });
  }

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink className={styles.menuLink} href='/'>
        <HouseIcon />
      </RouterLink>

      <RouterLink className={styles.menuLink} href='/history'>
        <HistoryIcon />
      </RouterLink>

      <RouterLink className={styles.menuLink} href='/settings'>
        <SettingsIcon />
      </RouterLink>

      <RouterLink className={styles.menuLink} href='#' onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  );
}
