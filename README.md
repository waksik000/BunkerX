# BunkerX — карточки “игры в бункер”

Простой SPA на React + Vite, где пользователь создаёт игру, задаёт количество игроков и получает:
- сгенерированные наборы карт
- сценарий катастрофы и условия бункера
- уникальные ссылки на игрока

Пример URL:
- `site.com/game/abc123/player/1`
- `site.com/game/abc123/player/2`

---

## Проектная идея

`BunkerX` — не полноценная игра, а генератор игровых карточек для условной ролевой «игры в бункер».

Пользователь:
1. Нажимает “Начать игру”
2. Указывает количество участников
3. Получает `gameId` (например `abc123`) + генерирует набор карточек
4. Получает уникальные ссылки для каждого игрока:
   - `/game/:gameId/player/:playerId`

На странице игрока отображается его индивидуальный кит:
- роль / статус
- задача / цель
- ресурсная карта

---

## Как сделать переход на следующий экран

1) Установите роутер:

```bash
npm install react-router-dom
```

2) Оберните приложение в `BrowserRouter` (`src/main.jsx`):

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

3) Определите маршруты (`src/App.jsx`):

```jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import GameCreate from './pages/GameCreate'
import PlayerPage from './pages/PlayerPage'

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/game/create" element={<GameCreate />} />
        <Route path="/game/:gameId/player/:playerId" element={<PlayerPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
```

4) Кнопка “Начать игру” (`Hero`) — переход на страницу создания:

```jsx
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/game/create')}>Начать игру</button>
  )
}
```

---

## Пример логики создания игры (`GameCreate`)

- Программно создан `gameId` (например `nanoid()`)
- На входе число игроков
- Генерация массива карточек
- Редирект игрока на `player/1`:

```jsx
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

function GameCreate() {
  const navigate = useNavigate()

  const onSubmit = (playersCount) => {
    const gameId = nanoid(6)
    const cards = generateCards(playersCount)
    const newGame = { gameId, cards }
    localStorage.setItem(`game_${gameId}`, JSON.stringify(newGame))
    navigate(`/game/${gameId}/player/1`)
  }

  ...
}
```

5) Страница `PlayerPage` извлекает `gameId` и `playerId` из `useParams` и рендерит индивидуальную карту.

---

## English project description

### Concept

BunkerX is a card generator app for a “bunker game”. User chooses player count, app generates a scenario, assigns cards, and provides per-player URLs.

### Flow

1. Landing page with **Start game** button
2. Game creation page (players count)
3. Generating cards + `gameId`
4. Player page: `/game/:gameId/player/:playerId`

### Data

- `gameId` in URL
- cards array per player
- unique player link

---

## Styles

- Font: Montserrat 400/500/600/700/800/900
- Colors: primary `#23A6F0`, text `#252B42`, secondary `#737373`, hover `#2A7CC7`, etc.

---

## Run

```bash
npm install
npm run dev
```

