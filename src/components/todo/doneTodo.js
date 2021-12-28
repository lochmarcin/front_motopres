import React from "react"
import axios from "axios";

import DoneTodo from "./doneTodoOne";

const Donetodos = () => {
    const [todos, setTodos] = React.useState(null);

    React.useEffect(() => {
        axios.get('http://127.0.0.1:5000/todo/getDone').then((response) => {
            setTodos(response.data);
            
        });
    }, []);

    return(
        <>
            <div id="container">
                <h1>Wykonane zadania:</h1>
                {todos && <DoneTodo todos={todos}></DoneTodo>}
            </div>
        </>
    )
}
export default Donetodos;