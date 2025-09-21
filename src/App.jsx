import { useState } from 'react'
import { GlobalProvider } from './contexts/GlobalContext'
import Home from './pages/Home'
import DefaultLayout from './components/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <GlobalProvider>
        <DefaultLayout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </DefaultLayout>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
