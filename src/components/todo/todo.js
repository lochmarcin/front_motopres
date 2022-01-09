import React from "react";
import AddTodo from "./addTodo";
import Todos from "./oneTodo";
import axios from "axios"


const Todo = () => {


    const [todos, setTodos] = React.useState(null);


    const todoDelete = async (id) => {
        const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo)
        axios.put('http://127.0.0.1:5000/todo/updateDone/'+id).then((response) => {
            console.log('Usunięto todo o id: ' + id)
        });

    }
    const todoAdd = (data) => {
        console.log(data)
        // todos.push()
        // setTodos(newTodo)
            todos.push(data)

            console.log("powinno dodaś do listy...")
        };

    

    React.useEffect(() => {
        axios.get('http://127.0.0.1:5000/todo/get').then((response) => {
            setTodos(response.data);
            console.log(response.data)
        });

        axios.get('http://127.0.0.1:5000/auth/me').then((response) => {
            console.log(response.data)
        });
    }, []);

    return (
        <>
            <div id="container">
                <div id="AddTodo">
                    <AddTodo todoAdd={todoAdd}></AddTodo>
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