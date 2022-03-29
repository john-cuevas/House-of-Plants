import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const OnePlant = () => {
    const {id} = useParams()
    const [plant, setPlant] = useState()
    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants/${id}`)
            .then(res => setPlant(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <Link to={"/"}>Dashboard</Link>
            {
                plant?
                    <div>
                        <h2> {plant.commonName} </h2>
                        <h5> {plant.scientificName} </h5>
                        <img src={plant.picture} alt = "Plant image"/>
                        <p>Description: {plant.description}</p>
                        <p>Temperature: {plant.temperature}</p>
                        <p>Humidity: {plant.humidity}</p>
                        <p>Water: {plant.water}</p>
                        <p>Light: {plant.light}</p>
                        <p>Soil: {plant.soil}</p>
                        <p>Fertilizer: {plant.fertilizer}</p>

                    </div>:
                    <h1>Sorry plant does not exist, please search again.</h1>
            }
        </div>
    )
}

export default OnePlant