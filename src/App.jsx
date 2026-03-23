import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './pages/Home'
import GamePage from './pages/GamePage'
import Footer from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
