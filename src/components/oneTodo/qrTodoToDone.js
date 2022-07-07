import { render } from "@testing-library/react";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import Url from "../config/url";
import axios from "axios";



const QrTodoToDone = () => {
    const navigate = useNavigate();
    const [doneTodo, setDoneTodo] = React.useState(false)
    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id")

    React.useEffect(() => {
        console.log("todo id: " + id)

        const QrChangeToDoneTodo = async () => {
            try {
                console.log("todo id: " + id)
                await axios.put(Url.api + '/todo/updateDone/' + id).then((response) => {
                    console.log("response /todo/updateDone/ + id")
                    console.log(response.data)
                    setDoneTodo(true)
                });
            } catch (err) {
                console.log("Error: from todoOne, get /todoOne/ + id" + err)
                setDoneTodo(false)
            }
        }

        QrChangeToDoneTodo()
    })

    return(
        <>
            <p>QrCode todo to done </p>
            <p>{id}</p>
            {doneTodo === true ? <p>Zadanie zostało ukończone</p> : <p>Błąd... Jesteś zalogowany ?</p>}
        </>
    )
}

export default QrTodoToDone