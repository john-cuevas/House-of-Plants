import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='NavbarContainer'>
            <div className='navbar'>
                <h1>Website Name</h1>
                <form>
                    <input type="text" placeholder = "Search"/>
                    {/* Search icon probably better */}
                    <button>Search</button>
                </form>
                <button>Sign In</button>
            </div>
            <div className='links navbar'>
                <ul>
                    {/* New view ? */}
                    <li><Link to={"/"}>Succulents</Link></li>
                    <li><Link to={"/"}>Cacti</Link></li>
                    <li><Link to={"/"}>Flowering Plants</Link></li>
                    <li><Link to={"/"}>Rare Plants</Link></li>
                    <li><Link to={"/"}>Easy to Care for</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header