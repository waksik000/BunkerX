import styles from './header.module.css'
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link to='/'>
          <span className={styles.logoText}>Bunker</span>
          <span className={styles.logoAccent}>X</span>
          </Link> 
        </div>

        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li className={styles.link}>Поиск игр</li>
            <li className={styles.link}>Таблица лидеров</li>
            <li className={styles.link}>Контакты</li>
          </ul>
        </nav>

        <button className={styles.profile}>Профиль →</button>
      </div>
    </header>
  )
}
