import React from "react";
import AddTodo from "./addTodo";
import Todos from "./oneTodo";
import axios from "axios"


const Todo = () => {


    const [todos, setTodos] = React.useState(null);


    const todoDelete = (id) => {
        const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo)
        axios.put('http://127.0.0.1:5000/todo/updateDone/'+id).then((response) => {
        
        });

    }


    // function todoDelete(id){
    //     console.log("delete kurwa")
    // }

    React.useEffect(() => {
        axios.get('http://127.0.0.1:5000/todo/get').then((response) => {
            setTodos(response.data);

        });
    }, []);

    return (
        <>
            <div id="container">
                <div id="AddTodo">
                    <AddTodo></AddTodo>
                </div>
                <br />
                <br />

                <div id="hr"></div>
                {todos && <Todos todos={todos} todoDelete={todoDelete}></Todos>}

            </div>
        </>
    );
}


export default Todo;