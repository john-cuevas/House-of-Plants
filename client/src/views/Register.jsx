import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Register = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        firstName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const changeHandler =(e) =>{
        let {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/register`, user, {withCredentials:true})
            .then(response=>console.log(response.data))
            .then(res=>history.push("/"))
            .catch(err => console.log(err.response))
    }
    return (
    <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Firstname</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={changeHandler} />
                </div>
                <button> Register </button>
            </form>
    </div>
    )
}

export default Register