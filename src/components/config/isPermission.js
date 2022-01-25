import React from "react"
import axios from "axios"
import Url from "../config/url"
import { useNavigate } from "react-router-dom"

const Permission = () => {
    const navigate = useNavigate()

    React.useEffect(() => {
        axios.get(Url + '/users/me').then((response) => {
            if(response.data.isAdmin != true)
                navigate('/todo')
        });
    }, []);
    return (
        <>
        </>
    )
}

export default Permission