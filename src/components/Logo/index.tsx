import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="#">
        <TimerIcon className={styles.svg} /> <span>Saturn</span>
      </a>
    </div>
  );
}
