import styles from "./game-page.module.css";
import generateCards from "../lib/generateCards";
import generateBunker from "../lib/generateBunker";
import { useState } from "react";

export default function GamePage() {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState("");
  const [playersCount, setPlayersCount] = useState(0);
  const [gameId, setGameId] = useState(null);
  const [bunkerData, setBunkerData] = useState(null);

  function handleStartGame() {
  const bunkerData = generateBunker();
  console.log("Сгенерированный бункер:", bunkerData);
  setBunkerData(bunkerData);


  const newGameId = crypto.randomUUID(); 
  if (!Number.isNaN(playersCount) && playersCount <= 12 && playersCount > 0) {
    const generatedCards = generateCards(playersCount);
    setCards(generatedCards);
    setError("");

    const gameStats = {
      gameId: newGameId,
      playersCount,
      cards: generatedCards,
    };

    //localStorage
    const allGames = JSON.parse(localStorage.getItem("bunker_games") || "{}");
    allGames[newGameId] = gameStats;
    localStorage.setItem("bunker_games", JSON.stringify(allGames));

    setGameId(newGameId);
  } else {
    setError("Некорректное число. Пожалуйста введите число от 1 до 12");
  }
}

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>Создай свою игру</h2>

        <p className={styles.description}>
          Выбери количество игроков и получи уникальные карточки для каждого
          участника
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
              min="1"
              max="12"
              value={playersCount}
              onChange={(e) => setPlayersCount(Number(e.target.value))}
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

          <button className={styles.submitBtn} onClick={handleStartGame}>
            Создать игру
          </button>

          {!bunkerData ? (<p className={styles.bunkerStatus}>Бункер не сгенерирован</p>) : (
            <div className={styles.bunkerInfo}>
              <h3>Сгенерированный бункер:</h3>
              <p><strong>Размер бункера:</strong> {bunkerData.bunkerSize}</p>
              <p><strong>Условия проживания:</strong> {bunkerData.bunkerLivingConditions}</p>
              <p><strong>Главная комната:</strong> {bunkerData.bunkerMainRoom}</p>
              {bunkerData.bunkerAdditionalRooms.length <= 0 ? (<p> <strong>Дополнительных комнат нет</strong> </p>) : (
                <ul>
                  {bunkerData.bunkerAdditionalRooms.map((room, index) => (
                    <li key={index}><strong>Дополнительная комната {index + 1}:</strong> {room}</li>
                  ))}
                </ul>
              )}
              <p><strong>Третья комната:</strong> {bunkerData.bunkerThirdRoom}</p>
              <p><strong>Инвентарь:</strong> {bunkerData.bunkerInventory}</p>
              <p><strong>Дополнительная информация:</strong> {bunkerData.bunkerStoryInfo}</p>
            </div>
          )}
          
          {!cards ? (
            <p className={styles.cardsStatus}>Карточки и бункер не сгенерированы</p>
          ) : (
            <div className={styles.cardsList}>
            {cards.map((card, index) => (
              <div key={card.playerId} className={styles.playerCardLink}>
                <span>Игрок {index + 1}</span>
                  <a
                    href={`/game/${gameId}/player/${card.playerId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть карточку
                  </a>
              </div>
            ))}
            </div>
          )}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
      </div>
    </div>
  );
}
