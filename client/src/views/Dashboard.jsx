import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants`)
            .then(res => setPlants(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                plants &&
                plants.map((plant, i) => (
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

export default Dashboard