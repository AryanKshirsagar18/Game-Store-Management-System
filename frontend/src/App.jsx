import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import GameDetailPage from './pages/GameDetailPage'
import { Home } from 'lucide-react'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/create" element={<CreatePage/>}/> */}
        <Route path="/games/:id" element={<GameDetailPage />} />
        <Route path="/create" element={<CreatePage/>}/>

      </Routes>
    </div>
  )
}

export default App