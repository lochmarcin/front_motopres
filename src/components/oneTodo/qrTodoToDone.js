import { render } from "@testing-library/react";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import Url from "../config/url";
import axios from "axios";



const QrTodoToDone = () => {
    const navigate = useNavigate();
    const [doneTodo, setDoneTodo] = React.useState()
    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id")

    React.useEffect(() => {
        console.log("todo id: " + id)

        const QrChangeToDoneTodo = async () => {
            try {
                console.log("todo id: " + id)
                await axios.put(Url.api + '/todo/updateDone/' + id).then((response) => {
                    console.log("response /todo/updateDone/ + id")
                    console.log(response.data.TodoToDone)
                    if (response.data.TodoToDone)
                        setDoneTodo(true)
                    else
                        setDoneTodo(false)
                });
            } catch (err) {
                console.log("Error: from todoOne, get /todoOne/ + id" + err)
                setDoneTodo(false)
            }
        }

        QrChangeToDoneTodo()
    })

    return (
        <>
            <div id="container">
                {/* <p>QrCode todo to done </p>
                <p>{id}</p> */}
                {doneTodo === true ? <div id="container"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" height='200' width='200' color='green'><title>Wykonane</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M416 128L192 384l-96-96" /></svg><h2>Zadanie zostało wykonane</h2></div>
                    : <><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" height='200' width='200' color='red'><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M368 368L144 144M368 144L144 368" /></svg><h2>Błąd... Jesteś zalogowany ?</h2></>}
            </div>
        </>
    )
}

export default QrTodoToDone