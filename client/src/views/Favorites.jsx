import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Favorites = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user`, { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])

    // const handleDelete = (plantId) => {
    //     console.log(plantId);
    //     axios({
    //         method: 'delete',
    //         url: `http://localhost:8000/api/favorites`,
    //         withCredentials: true,
    //         data: {
    //             plantId
    //         }
    //     });
    // }

    return (
        <div className='typeContainer'>
            <h2> Favorites</h2>
            <div className='PlantContainer'>
                {
                    user &&
                    user.favorites.map((plant, i) => (
                        <div className='Plants' key={i}>
                            <p>
                                <Link to={`/plants/${plant._id}`}>{plant.commonName}</Link>
                            </p>
                            <img src={plant.picture} alt="Plant image" />
                            {/* <button type="button" onClick={() => handleDelete(plant._id)}>Delete</button> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites