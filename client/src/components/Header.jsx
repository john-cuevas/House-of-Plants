import React from 'react'
import {Link} from 'react-router-dom'
// import './App.css';

const Header = () => {
    return (
        <div className='NavbarContainer'>
            <div className='navbar'>
                <h1><Link to={"/"}>House of Plants</Link></h1>
                <form>
                    <input type="text" placeholder = "Search"/>
                    {/* Search icon probably better */}
                    {/* <button>Search</button> */}
                </form>
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
        </div>
    )
}

export default Header