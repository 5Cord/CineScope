import React from 'react'

import './App.css'
import Menu from './components/Menu'
import { Route, Routes } from 'react-router'
import Catalog from './pages/Catalog'
import Favourites from './pages/Favourites'

function App() {

  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/fav" element={<Favourites />} />
      </Routes>
    </>
  )
}

export default App
