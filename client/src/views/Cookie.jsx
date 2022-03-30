import React, {useEffect} from 'react'
import axios from 'axios'

const Cookie = () => {

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/cookie`)
            .then(res=>console.log("success"))
            .catch()
    })
    return (
    <div>Cookie</div>
    )
}

export default Cookie