import React from "react"
import axios from "axios";
import Url from "../config/url"


import DoneTodo from "./doneTodoOne";

const Donetodos = () => {
    const [todos, setTodos] = React.useState(null);

    const todoRestore = async (id) => {
        const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo)
        axios.put(Url + '/todo/updateNotDone/' + id).then((response) => {
            console.log('przeniesiono zadanie do wykoania o id: ' + id)
        })
    }
    React.useEffect(() => {
        axios.get(Url + '/todo/getDone').then((response) => {
            setTodos(response.data);
        });
    }, []);

    return (
        <>
            <div id="container">
                <h1>Wykonane zadania:</h1>
                {todos && <DoneTodo todos={todos} todoRestore={todoRestore}></DoneTodo>}
            </div>
        </>
    )
}
export default Donetodos;