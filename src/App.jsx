import { useState } from 'react'
import { GlobalProvider } from './contexts/GlobalContext'
import Home from './pages/Home'
import DefaultLayout from './components/DefaultLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DeviceDetails from './pages/DeviceDetails'

function App() {


  return (
    <BrowserRouter>
      <GlobalProvider>
        <DefaultLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<DeviceDetails />} />
          </Routes>
        </DefaultLayout>
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
