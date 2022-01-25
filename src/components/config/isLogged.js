import React from "react"
import axios from "axios"
import Url from "../config/url"
import { useNavigate } from "react-router-dom"


const Logged = () => {
    const navigate = useNavigate()

    React.useEffect(() => {
        axios.get(Url + '/auth/me').then((response) => {
            if (response.data.logged == false) {
                navigate('/login')
            }
        });
    }, []);
    return (
        <>
        </>
    )
}

export default Logged