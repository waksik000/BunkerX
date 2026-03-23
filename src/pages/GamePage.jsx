import styles from './game-page.module.css'
import generateCard from '../lib/generateCards'
import { useState } from 'react'


export default function GamePage() {
  const [card,setCard] = useState(null)

  function handleGenerateCard() {
    const card = generateCard()
    setCard(card)
  }


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

          <button className={styles.submitBtn} onClick={handleGenerateCard}>
            Создать игру
          </button>

          {!card ? <p>Нет карточек</p> :(
            <div>
              <h3>{card.profession}</h3>
              <p>{card.health}</p>
              <p>{card.hobbie}</p>
              <p>{card.baggage}</p>
              <p>{card.biology}</p>
              <p>{card.trait}</p>
            </div>
          )}


        </div>
      </div>
    </div>
  )
}
