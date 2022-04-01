import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Succulents = () => {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants`)
            
            .then(res => setPlants(res.data))
            .catch(err => console.log(err))
    }, [])

    const filteredPlants = plants.filter((plant) => plant.type.includes("succulent"))

    return (
        <div className='typeContainer'>
            <h2>Succulents</h2>
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

export default Succulents