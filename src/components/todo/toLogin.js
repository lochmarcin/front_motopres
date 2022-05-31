import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"


const ToLogin = () => {
    const navigate = useNavigate()

    
    React.useEffect(() => {
        navigate('/login')
        
    }, []);
    return (
        <>
            {console.log(" chuj z to Login")}
            {/* {() => {navigate('/login')}} */}
        </>
    )
}
export default ToLogin