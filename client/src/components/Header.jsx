import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'


const Header = () => {
    let history = useHistory()

    const handleLogOut = ()=> {
        axios.get(`http://localhost:8000/api/logout`,{withCredentials: true})
            .then(history.push("/"))
            .catch()
    }

    return (
        <div className='NavbarContainer'>
            <div className='navbar'>
                <h1><Link to={"/"}>House of Plants</Link></h1>
                <form>
                    <input type="text" placeholder = "Search"/>
                    {/* Search icon probably better */}
                    {/* <button>Search</button> */}
                </form>
                <Link to="/favorites"><button>Favorites</button></Link>
                <Link to="/login"> <button>Sign In</button></Link>
                <Link to="/register">New user?</Link>
                <button onClick={handleLogOut}>Sign Out</button>
                
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
        </div>
    )
}

export default Header