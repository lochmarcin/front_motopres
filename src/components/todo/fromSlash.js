import React from "react";
import axios from "axios";
import Url from "../config/url"
import { useNavigate } from "react-router-dom"



const Logged = (props) => {
    const navigate = useNavigate()
    console.log(props.from)
    React.useEffect(() => {
        axios.get(Url.api + '/auth/me').then((response) => {
            // setTodos(response.data);
            console.log(response)
            if (response.data.logged === true) {
                console.log("(:From slash logged==" + response.data.logged)
                if(props.from == undefined)
                    navigate('/todo')
                else    
                    navigate(`/${props.from}`)
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