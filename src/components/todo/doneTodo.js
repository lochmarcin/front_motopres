import React from "react"
import axios from "axios";
import Url from "../config/url"
import Filter from "./filter"



import DoneTodo from "./doneTodoOne";

const Donetodos = () => {
    const [todos, setTodos] = React.useState(null);
    const [radioValue, setRadioValue] = React.useState("Wszystko");

    // const [alert, setAlert] = React.useState(false);


    const todoRestore = async (id) => {
        const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo)
        axios.put(Url + '/todo/updateNotDone/' + id).then((response) => {
            console.log('przeniesiono zadanie do wykoania o id: ' + id)
        })
    }
    // Todo delete 
    const deleteTodo = (id) => {
        console.log("IDelete: " + id)
        axios.delete(Url + '/todo/delete/' + id).then((response) => {
            if (response.data == true)
                console.log("Deleted")
        })
        const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo)
    }

    React.useEffect(() => {
        axios.get(Url + '/todo/getDone').then((response) => {
            setTodos(response.data);
        });
    }, []);

    return (
        <>
            <div id="container">
                <Filter radioValue={radioValue} setRadioValue={setRadioValue}></Filter>

                <h1>Wykonane zadania:</h1>
                {todos && <DoneTodo radioValue={radioValue} todos={todos} todoRestore={todoRestore} deleteTodo={deleteTodo}></DoneTodo>}
            </div>
        </>
    )
}
export default Donetodos;