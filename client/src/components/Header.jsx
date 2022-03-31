import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Header = () => {
    const [plants, setPlants] = useState([])
    const [filteredResults, setFilteredResults] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants`)
            .then(res => setPlants(res.data))
            .catch(err => console.log(err))
    }, [])  
    const searchItems = (searchValue) => {
        // setSearch(searchValue)

        if (searchValue == '') {
            setFilteredResults(plants)
            setSearch("")
        }
        else{
            const filteredPlant = plants.filter((plant) => plant.commonName.toLowerCase().includes(searchValue.toLowerCase())) 
                
            setFilteredResults(filteredPlant)
        }
    }

    return (
        <div className='NavbarContainer'>
            <div className='navbar'>
                <h1><Link to={"/"}>House of Plants</Link></h1>
                <input icon='search'
                placeholder='Search'
                onChange={(e) => searchItems(e.target.value)}/>
                <Link to={"/login"}><button>Sign In</button></Link>
            </div>
            <div className='links navbar'>
                <ul>
                    {/* New view ? */}
                    <li><Link to={"/succulents"}>Succulents</Link></li>
                    <li><Link to={"/cacti"}>Cacti</Link></li>
                    <li><Link to={"/flowering_plants"}>Flowering Plants</Link></li>
                    <li><Link to={"/rare_plants"}>Rare Plants</Link></li>
                    <li><Link to={"/easy_to_care_for"}>Easy to Care for</Link></li>
                </ul>
            </div>

            <div className='PlantContainer'>
                {
                    filteredResults &&
                    filteredResults.map((plant, i) => (
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

export default Header