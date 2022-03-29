import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FloweringPlants = () => {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants`)
            
            .then(res => setPlants(res.data))
            .catch(err => console.log(err))
    }, [])

    const filteredPlants = plants.filter((plant) => plant.type.includes("flower"))

    return (
        <div>
            <h1>FLowering Plants</h1>
            <Link to={"/"}>Dashboard</Link>
            {
                filteredPlants &&
                filteredPlants.map((plant, i) => (
                    <div key = {i}>
                        <p> 
                            <Link to={`/plants/${plant._id}`}>{plant.commonName}</Link>
                        </p>
                        <img src={plant.picture} alt = "Plant image"/>
                    </div>
                ))
            }
        </div>
    )
}

export default FloweringPlants