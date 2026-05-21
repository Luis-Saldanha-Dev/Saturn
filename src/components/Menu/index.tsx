import { House } from 'lucide-react';
import { History } from 'lucide-react';
import { Bolt } from 'lucide-react';
import { Sun } from 'lucide-react';


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