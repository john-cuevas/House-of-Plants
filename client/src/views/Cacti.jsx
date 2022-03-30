import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Cacti = () => {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants`)
            
            .then(res => setPlants(res.data))
            .catch(err => console.log(err))
    }, [])

    const filteredPlants = plants.filter((plant) => plant.type.includes("cacti"))

    return (
        <div className='typeContainer'>
            <h1>Cacti</h1>
            <div className='PlantContainer'>
                {
                    filteredPlants &&
                    filteredPlants.map((plant, i) => (
                        <div className = 'Plants' key = {i}>
                            <p> 
                                <Link to={`/plants/${plant._id}`}>{plant.commonName}</Link>
                            </p>
                            <img src={plant.picture} alt = "Plant image"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cacti