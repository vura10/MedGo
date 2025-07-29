import { useState } from 'react'
import './App.css'
import AuthPage from './pages/AuthPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import DashboardLayout from './pages/DashboardLayout'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AuthPage />} />
            <Route path='/home' element={<DashboardLayout /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
