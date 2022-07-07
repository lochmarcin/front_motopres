import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Url from "../config/url"



const Logout = (props) =>{
    const navigate = useNavigate()

    const setLogoutRole = {
        isAdmin : false,
        isEditor : false
    }

    React.useEffect(() => {
        axios.delete(Url.api + '/auth/logout')
        .then((response) => {
            props.userRole(setLogoutRole)
            props.userWho("")
            console.log(response.data.logged)
            console.log(response.data.message)

            if(response.data.logged === false) {

                navigate('/login')
            }
        });
    }, []);

    return(null)
}
export default Logout