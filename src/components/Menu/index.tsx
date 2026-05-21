import { House, History, Bolt, Sun, Moon } from 'lucide-react';



import styles from './styles.module.css'

export function Menu(){
    return (
    <nav className={styles.menu}>
        <a className={styles.menuLink} href="#"> <House /></a>
        <a className={styles.menuLink} href="#"><History /></a>
        <a className={styles.menuLink} href="#"><Bolt /></a>
        <a className={styles.menuLink} href="#"> <Sun /></a>
    </nav>
    );
};