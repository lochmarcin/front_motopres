import { render } from "@testing-library/react";
import React from "react";
import Url from "../config/url";


const QrTodoToDone = () => {
    const [doneTodo, setDoneTodo] = React.useState(false)

    React.useEffect(() => {
        const QrChangeToDoneTodo = async () => {
            try {
                await axios.get(Url + '/updateDone/' + id).then((response) => {
                    console.log("response /updateDone/ + id")
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

    render(
        <>
            <p>chuj</p>
            {doneTodo === true ? <p>Zadanie zostało ukończone</p> : <p>Błąd... Jesteś zalogowany ?</p>}
        </>
    )
}

export default QrTodoToDone