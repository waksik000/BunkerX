import styles from './game-page.module.css'

export default function GamePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Создай свою игру</h2>
        
        <p className={styles.description}>
          Выбери количество игроков и получи уникальные карточки для каждого участника
        </p>

        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="players" className={styles.label}>
              Количество игроков
            </label>
            <input 
              type="number" 
              id="players" 
              className={styles.input}
              min="2"
              max="10"
              defaultValue="4"
              placeholder="Выберите количество"
            />
          </div>

          <div className={styles.info}>
            <h6>Что будет сгенерировано:</h6>
            <ul className={styles.infoList}>
              <li>Уникальная сценария катастрофы</li>
              <li>Условия пребывания в бункере</li>
              <li>Индивидуальные карточки для каждого игрока</li>
              <li>Персональные ссылки для участников</li>
            </ul>
          </div>

          <button className={styles.submitBtn}>
            Создать игру
          </button>
        </div>
      </div>
    </div>
  )
}
