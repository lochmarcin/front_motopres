import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"


const ToLogin = () => {
    const navigate = useNavigate()

    
    React.useEffect(() => {
        navigate('/todo')
    }, []);
}
export default ToLogin