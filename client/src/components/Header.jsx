import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'


const Header = () => {
    let history = useHistory()
    const [user, setUser] = useState("")

    const handleLogOut = ()=> {
        axios.get(`http://localhost:8000/api/logout`,{withCredentials: true})
            .then(history.push("/"))
            .catch()
    }

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/user`,{withCredentials: true})
            .then(res => setUser(res.data))
            // .then(setRefresh(!refresh))
            .catch(err => console.log(err))
    }, )


    return (
        <div className='NavbarContainer'>
            <div className='navbar1'>
                <h1><Link to={"/"}>House of Plants</Link></h1>
                <div className='navbarlink'>
                    {
                        user?
                            <div >
                                <h4>Welcome {user.firstName}!</h4>
                                <Link to="/favorites"><button>Favorites</button></Link>
                                <button onClick={handleLogOut}>Sign Out</button>
                            </div>
                        :
                            <div >
                                <Link to="/login"> <button>Sign In</button></Link>
                            </div>

                    }
                </div>

                {/* <div className='navbarlink'>
                    <Link to="/favorites"><button>Favorites</button></Link>
                    <Link to="/login"> <button>Sign In</button></Link>
                    <button onClick={handleLogOut}>Sign Out</button>
                </div> */}
                
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