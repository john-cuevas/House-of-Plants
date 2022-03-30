import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'

const Dashboard = () => {
    const [plants, setPlants] = useState([])
    const carousel = 
        [
            {id: 1, source: 'https://cdn.shopify.com/s/files/1/2541/4208/products/wholesale-succulent-plants-for-sale-by-succy-crafts-314732.jpg?v=1623784454'},
            {id: 2, source: 'https://cdn11.bigcommerce.com/s-oqm1pc/images/stencil/631x631/products/2918/9362/set9_cactus__79311.1629325859.jpg?c=2'},
            {id: 3, source: 'https://cdn.cdnparenting.com/articles/2019/01/12114103/519235318-H.jpg'},
            {id: 4, source: 'https://cdn.shopify.com/s/files/1/0662/5489/files/variegated-monstera-albo-variegata-variegated-indoor-plants-pistils-nursery-6.jpg?v=1572628630'},
            {id: 5, source: 'https://cdn.shopify.com/s/files/1/2528/3612/products/Easy-Care-Bundle-animation_800px_800x800.gif?v=1621115461'}
        ]
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants`)
            .then(res => setPlants(res.data))
            .catch(err => console.log(err))
    }, [])

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
            <div className='PlantContainer'>
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
            </div>
        </div>
    )
}

export default Dashboard