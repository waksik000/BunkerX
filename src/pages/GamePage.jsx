import { useState } from "react";
import generateBunker from "../lib/generateBunker";
import generateCards from "../lib/generateCards";
import generateDisaster from "../lib/generateDisaster";
import styles from "./game-page.module.css";

export default function GamePage() {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState("");
  const [playersCount, setPlayersCount] = useState(0);
  const [gameId, setGameId] = useState(null);
  const [bunkerData, setBunkerData] = useState(null);
  const [disasterData, setDisasterData] = useState(null);

  function handleStartGame() {
    const newGameId = crypto.randomUUID();

    if (!Number.isNaN(playersCount) && playersCount <= 12 && playersCount > 0) {
      const generatedBunker = generateBunker();
      const generatedCards = generateCards(playersCount);
      const generatedDisaster = generateDisaster();

      setBunkerData(generatedBunker);
      setCards(generatedCards);
      setDisasterData(generatedDisaster);
      setError("");

      const gameStats = {
        gameId: newGameId,
        playersCount,
        cards: generatedCards,
      };

      const allGames = JSON.parse(localStorage.getItem("bunker_games") || "{}");
      allGames[newGameId] = gameStats;
      localStorage.setItem("bunker_games", JSON.stringify(allGames));

      setGameId(newGameId);
      return;
    }

    setError("Некорректное число. Пожалуйста, введите число от 1 до 12");
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>BunkerX</p>
          <h2>Создай свою игру</h2>
          <p className={styles.description}>
            Выбери количество игроков и получи уникальные карточки для каждого
            участника, параметры бункера и подготовленное место для будущего
            сценария катастрофы.
          </p>
        </div>

        <div className={styles.layout}>
          <section className={styles.form} aria-labelledby="game-setup-title">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionKicker}>Настройка</p>
              <h3 id="game-setup-title" className={styles.sectionTitle}>
                Параметры партии
              </h3>
            </div>

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
                placeholder="Введите количество"
              />
            </div>

            <div className={styles.info}>
              <h6>Что будет сгенерировано:</h6>
              <ul className={styles.infoList}>
                <li>Уникальный бункер с деталями проживания</li>
                <li>Сценарий катастрофы с общей обстановкой</li>
                <li>Индивидуальные карточки для каждого игрока</li>
                <li>Персональные ссылки для участников</li>
              </ul>
            </div>

            <button className={styles.submitBtn} onClick={handleStartGame}>
              Создать игру
            </button>

            {error && <p className={styles.errorMessage}>{error}</p>}
          </section>

          <section className={styles.preview} aria-labelledby="game-preview-title">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionKicker}>Превью</p>
              <h3 id="game-preview-title" className={styles.sectionTitle}>
                Состав партии
              </h3>
            </div>

            <div className={styles.previewStack}>
              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <h4 className={styles.panelTitle}>Бункер</h4>
                  <span className={styles.panelBadge}>Основа</span>
                </div>

                {!bunkerData ? (
                  <p className={styles.emptyState}>Бункер пока не сгенерирован</p>
                ) : (
                  <div className={styles.bunkerInfo}>
                    <div className={styles.detailGrid}>
                      <div className={styles.detailCard}>
                        <span className={styles.detailLabel}>Размер</span>
                        <p className={styles.detailValue}>{bunkerData.bunkerSize}</p>
                      </div>

                      <div className={styles.detailCard}>
                        <span className={styles.detailLabel}>Условия</span>
                        <p className={styles.detailValue}>
                          {bunkerData.bunkerLivingConditions}
                        </p>
                      </div>

                      <div className={styles.detailCard}>
                        <span className={styles.detailLabel}>Главная комната</span>
                        <p className={styles.detailValue}>
                          {bunkerData.bunkerMainRoom}
                        </p>
                      </div>

                      <div className={styles.detailCard}>
                        <span className={styles.detailLabel}>Побочная комната</span>
                        <p className={styles.detailValue}>
                          {bunkerData.bunkerThirdRoom}
                        </p>
                      </div>

                      <div className={styles.detailCard}>
                        <span className={styles.detailLabel}>Инвентарь</span>
                        <p className={styles.detailValue}>
                          {bunkerData.bunkerInventory}
                        </p>
                      </div>

                      <div className={styles.detailCard}>
                        <span className={styles.detailLabel}>Доп. информация</span>
                        <p className={styles.detailValue}>
                          {bunkerData.bunkerStoryInfo}
                        </p>
                      </div>
                    </div>

                    <div className={styles.roomsBlock}>
                      <span className={styles.detailLabel}>Дополнительные комнаты</span>

                      {bunkerData.bunkerAdditionalRooms.length === 0 ? (
                        <p className={styles.roomsEmpty}>
                          Дополнительных комнат нет
                        </p>
                      ) : (
                        <ul className={styles.roomsList}>
                          {bunkerData.bunkerAdditionalRooms.map((room, index) => (
                            <li key={`${room}-${index}`} className={styles.roomItem}>
                              <span className={styles.roomIndex}>
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className={styles.roomText}>{room}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className={`${styles.panel} ${styles.panelDisaster}`}>
                <div className={styles.panelHeader}>
                  <h4 className={styles.panelTitle}>Катастрофа</h4>
                  <span className={styles.panelBadge}>Опасность</span>
                </div>

                {!disasterData ? (
                  <p className={styles.futureNote}>
                    Здесь будет отображаться сценарий катастрофы.
                  </p>
                ) : (
                  <p className={styles.disasterText}>{disasterData}</p>
                )}
              </div>

              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <h4 className={styles.panelTitle}>Карточки игроков</h4>
                  <span className={styles.panelBadge}>
                    {cards ? `${cards.length} игроков` : "Ожидание"}
                  </span>
                </div>

                {!cards ? (
                  <p className={styles.emptyState}>
                    Карточки игроков появятся после генерации
                  </p>
                ) : (
                  <div className={styles.cardsList}>
                    {cards.map((card, index) => (
                      <div key={card.playerId} className={styles.playerCardLink}>
                        <div className={styles.playerMeta}>
                          <span className={styles.playerIndex}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className={styles.playerName}>Игрок {index + 1}</span>
                        </div>
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
