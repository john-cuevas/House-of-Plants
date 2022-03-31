import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, Link} from 'react-router-dom'


const Login = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        email: "",
        password: ""
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
        axios.post(`http://localhost:8000/api/login`, user, { withCredentials: true })
            .then(response => console.log(response.data))
            .then(res => history.push("/"))
            .catch(err => console.log(err.response))
    }

    return (
        <div className='RegisterForm'>
            <h2>Login Here</h2>
            <form onSubmit={submitHandler}>
                <div className='FormInput'>
                    <label>Email: </label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div className='FormInput'>
                    <label>Password: </label>
                    <input type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>
                <div className='FormButton'>
                    <button> Login </button>
                </div>
            </form>
            <p>If not a user, click <Link to={`/register`}>here</Link> to create an account </p>
        </div>
    )
}

export default Login