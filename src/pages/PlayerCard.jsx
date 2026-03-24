import { useParams } from 'react-router-dom';
import styles from './player-card.module.css'

export default function PlayerCard() {
  const { gameId, playerId } = useParams();
  

  const allGames = JSON.parse(localStorage.getItem("bunker_games") || "{}");
  const gameStats = allGames[gameId];
  if (!gameStats) return <p>Игра не найдена</p>;

  const card = gameStats.cards.find(c => c.playerId === playerId)
  if (!card) return <p>Карточка игрока не найдена</p>


  return (
    <div className={styles.playerCardPage}>
      {!card ? (
    <p className={styles.playerCardError}>Карточка игрока не найдена</p>
  ) : (
    <>
      <h2>Карточка игрока</h2>
      <ul>
        <li><span>Профессия:</span> <span>{card.profession}</span></li>
        <li><span>Здоровье:</span> <span>{card.health}</span></li>
        <li><span>Хобби:</span> <span>{card.hobby}</span></li>
        <li><span>Багаж:</span> <span>{card.baggage}</span></li>
        <li><span>Биология:</span> <span>{card.biology}</span></li>
        <li><span>Черта характера:</span> <span>{card.trait}</span></li>
        <li><span>Фобия:</span> <span>{card.phobia}</span></li>
        <li><span>Факт:</span> <span>{card.fact}</span></li>
      </ul>
      </>
  )}
    </div>
  )
}