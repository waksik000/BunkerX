import styles from './hero.module.css'
import { useNavigate } from "react-router-dom";


export default function Hero() {
  const navigate = useNavigate();


  return (
    <main className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Играй в BunkerX</h1>
        <p className={styles.subtitle}>Создавай комнаты, обменивайся активами и побеждай!</p>
        <button className={styles.button} onClick={() => navigate('/game')}>Начать игру</button>
      </div>
      <div className={styles.media} aria-hidden="true" />
    </main>
  )
}
