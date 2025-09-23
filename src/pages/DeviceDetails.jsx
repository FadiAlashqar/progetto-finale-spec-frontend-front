import React from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'

const DeviceDetails = () => {

    const { devices, setDevices } = useContext(GlobalContext)
    const { id } = useParams()

    const selectedDevice = devices.find((d) => d.id === Number(id))
    console.log(selectedDevice)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <button>Aggiungi ai preferiti</button>
                </div>
                <div className="col-12">
                    <Card
                        key={selectedDevice.id}
                        img={selectedDevice.img}
                        title={selectedDevice.title}
                        category={selectedDevice.category}
                        releaseYear={selectedDevice.releaseYear}
                        model={selectedDevice.model}
                        ram={selectedDevice.ram}
                        phoneStorage={selectedDevice.phoneStorage}
                    />
                </div>
            </div>
        </div>
    )
}

export default DeviceDetails