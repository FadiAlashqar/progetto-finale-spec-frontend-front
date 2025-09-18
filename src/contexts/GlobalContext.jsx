import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [devices, setDevices] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/devices')
            .then((res) => res.json())
            .then((data) => setDevices(data))
    }, [])

    return <GlobalContext.Provider value={{ devices }}>
        {children}
    </GlobalContext.Provider>

}
