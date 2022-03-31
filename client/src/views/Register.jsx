import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

const Register = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/register`, user, { withCredentials: true })
            .then(response => console.log(response.data))
            .then(res => history.push("/"))
            .catch(err => console.log(err.response))
    }
    return (
        <div className='RegisterForm'>
            <h2> Register Here</h2>
            <form onSubmit={submitHandler}>
                <div className='FormInput'>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={changeHandler} />
                </div>
                <div className='FormInput'>
                    <label>Email:</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div className='FormInput'>
                    <label>Password:</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <div className='FormInput'>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={changeHandler} />
                </div>
                <div className='FormButton'>
                    <button> Register </button>
                </div>
            </form>
            <p>If already a user, click <Link to={`/login`}>here</Link> to log into your account </p>
        </div>
    )
}

export default Register