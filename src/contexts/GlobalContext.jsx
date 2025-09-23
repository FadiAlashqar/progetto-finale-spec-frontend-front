import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [devices, setDevices] = useState([])
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        Promise.all(ids.map((i) => fetch(`http://localhost:3001/devices/${i}`).then((res) => res.json()).then((obj) => obj.device)))
            .then((data) => setDevices(data))
    }, [])

    return <GlobalContext.Provider value={{ devices, setDevices }}>
        {children}
    </GlobalContext.Provider>

}
