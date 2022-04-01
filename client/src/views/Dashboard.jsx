import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'

const Dashboard = () => {
    const [plants, setPlants] = useState([])
    const [filteredResults, setFilteredResults] = useState("")

    const carousel = 
        [
            {id: 1, source: 'https://cdn.shopify.com/s/files/1/2541/4208/products/wholesale-succulent-plants-for-sale-by-succy-crafts-314732.jpg?v=1623784454'},
            {id: 2, source: 'https://www.gardeningknowhow.com/wp-content/uploads/2020/12/cacti-and-succulents-690x518.jpg'},
            {id: 3, source: 'https://cdn.cdnparenting.com/articles/2019/01/12114103/519235318-H.jpg'},
            {id: 4, source: 'https://cityfloralgreenhouse.com/wp-content/uploads/2021/01/houseplant-trend-header.jpg'},
            {id: 5, source: 'https://cdn.shopify.com/s/files/1/2528/3612/products/Easy-Care-Bundle-animation_800px_800x800.gif?v=1621115461'}
        ]
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants`)
            .then(res => setPlants(res.data))
            .catch(err => console.log(err))
    }, [])  

    const searchItems = (searchValue) => {

        if (searchValue == '') {
            setFilteredResults(plants)
        }
        else{
            const filteredPlant = plants.filter((plant) => plant.commonName.toLowerCase().includes(searchValue.toLowerCase())) 
                
            setFilteredResults(filteredPlant)
        }
    }

    return (
        <div className='DashboardContainer'>

            <div className='CarouselContainer'>
                <Carousel>
                    {carousel.map(item =>
                        <div key = {item.id}>
                            <img src={item.source} alt="Plant images" />
                        </div>
                        )}
                </Carousel>
            </div>
            <div className='SearchContainer'>
                <input icon='search'
                    placeholder='Search for Plants'
                    onChange={(e) => searchItems(e.target.value)}/>
            </div>
            {/* <div className='PlantContainer'>
                {
                    plants &&
                    plants.map((plant, i) => (
                        <div className = 'Plants' key = {i}>
                            <p> 
                                <Link to={`/plants/${plant._id}`}>{plant.commonName}</Link>
                            </p>
                            <img  src={plant.picture} alt = "Plant image"/>
                        </div>
                    ))
                }
            </div> */}

            {/* <div className='PlantContainer'>
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
            </div> */}

            <div className='PlantContainer'>
                {
                    filteredResults?
                    filteredResults.map((plant, i) => (
                        <div className = 'Plants' key = {i}>
                            <p> 
                                <Link to={`/plants/${plant._id}`}>{plant.commonName}</Link>
                            </p>
                            <img src={plant.picture} alt = "Plant image"/>
                        </div>
                    ))
                    :
                    plants.map((plant, i) => (
                        <div className = 'Plants' key = {i}>
                            <p> 
                                <Link to={`/plants/${plant._id}`}>{plant.commonName}</Link>
                            </p>
                            <img  src={plant.picture} alt = "Plant image"/>
                        </div>
                    ))
    
                }
            </div>
        </div>
    )
}

export default Dashboard