import { useState } from 'react'
import './App.css'
import AuthPage from './pages/AuthPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AuthPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
