import { render } from "@testing-library/react";
import React from "react";

const Logs = (props) => {

    React.useEffect(() => {
        console.log(props)

    }, [])

    return(
        <>
            <p>Logi użytkownika: </p>
        </>
    )
}

export default Logs