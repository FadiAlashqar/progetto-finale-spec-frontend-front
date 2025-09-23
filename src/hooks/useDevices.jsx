import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function UseDevices() {

    const { devices } = useContext(GlobalContext)

    const getSpecificDevice = async (query) => {
        const res = await fetch(`http://localhost:3001/devices?search=${query}`)
        const data = await res.json()
        return data
    }



    return { getSpecificDevice }
}

export default UseDevices