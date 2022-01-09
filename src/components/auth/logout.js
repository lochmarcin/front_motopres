import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"


const Logout = () =>{
    const navigate = useNavigate()

    React.useEffect(() => {
        axios.get('http://127.0.0.1:5000/auth/logout')
        .then((response) => {
            navigate('/login')
        });
    }, []);


    return(null)
}
export default Logout