import React from "react";
import { Alert } from "react-bootstrap"


const LoginError = () => {
    return (
        <>
         <Alert variant='danger'>
                Błędne dane logowania
            </Alert>
        </>
    )
}

export default LoginError