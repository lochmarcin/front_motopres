import React from "react";
import axios from "axios";
import Url from "../config/url"



const Auth = () =>{

    React.useEffect(() => {
        axios.get(Url + '/auth/me').then((response) => {
            // setTodos(response.data);
            console.log(response.data)
        });

        // if (props.role == "editor" || props.role == "admin")
        //     setIsEditor(true)
        // axios.get('http://127.0.0.1:5000/auth/me').then((response) => {
        //     console.log(response.data)
        // });
    }, []);
    return(
        <>
        </>
    )
}

export default Auth;
