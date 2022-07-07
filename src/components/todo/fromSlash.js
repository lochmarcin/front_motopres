import React from "react";
import axios from "axios";
import Url from "../config/url"
import { useNavigate } from "react-router-dom"



const Logged = () => {
    const navigate = useNavigate()

    React.useEffect(() => {
        axios.get(Url.api + '/auth/me').then((response) => {
            // setTodos(response.data);
            console.log(response.data)
            if (response.data.logged === true) {
                console.log("(:From slash logged==" + response.data.logged)
                navigate('/todo')
            }
            else if (response.data.logged === false) {
                console.log(":((( From slash logged==" + response.data.logged)
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