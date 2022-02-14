import React from "react";
import AddTodo from "./addTodo";
import Todos from "./oneTodo";
import axios from "axios"
import Logged from "./fromSlash"
import Filter from "./filter"

import TodoEdit from "./editTodo";
import Url from "../config/url"

import { Modal } from "react-bootstrap"


import { useNavigate } from "react-router-dom"



const Todo = (props) => {
    const [showEdit, setShowEdit] = React.useState(false)
    const [isUptaded, setIsUptaded] = React.useState(false)
    const [oneTodo, setOneTodo] = React.useState(null)
    const [radioValue, setRadioValue] = React.useState("Wszystko");
    // let news


    const [isEditor, setIsEditor] = React.useState(false)
    const [todos, setTodos] = React.useState(null);
    const navigate = useNavigate()



    const todoDone = async (id) => {
        const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo)
        axios.put(Url + '/todo/updateDone/' + id)

    }
    const todoAdd = async (data) => {
        const newTodo = todos
        newTodo.push(data)
        setTodos(newTodo)
        navigate('/todo')
    };

    const editTodo = (id) => {
        console.log("Id " + id)
        let onetodo = todos.filter(x => x.id === id)
        console.log(onetodo[0])
        setOneTodo(onetodo[0])
        // setIdEditTodo(id)
        setShowEdit(true)
    }



    const updatedTodo = (data) => {
        console.log(data)
        let newTodo = todos.filter(todos => todos.id !== data.id)
        newTodo.push(data)
        setTodos(newTodo)
        updatedAlert()
    }

    const updatedAlert = () => {
        setIsUptaded(true)
        setTimeout(
            () => setIsUptaded(false),
            3000
        );
    }
    const [news, setNews] = React.useState()



    const getData = () => {
        axios.get(Url + '/todo/get').then((response) => {
            setTodos(response.data);
        });
    }

    // setNews((int) => {
    //     return int
    // }
    // )


    // const interval = () => {
    //     setInterval(() => {
    //         axios.get(Url + '/news/todos').then((response) => {
    //             // console.log(response.data.todos)
    //             if (response.data.todos != news) {
    //                 getData()
    //                 setNews(response.data.todos)
    //             }
    //         });
    //     }, 10000);
    // }


    React.useEffect(() => {
        getData()
        // interval()

        // console.log(props.role)
        if (props.role == 'admin' || props.role == 'editor') {
            setIsEditor(true)
        }
        else if (props.role == null) {
            axios.get(Url + '/users/me').then((response) => {
                // console.log(response.data)
                response.data.isEditor == true || response.data.isAdmin == true ? setIsEditor(true) : setIsEditor(false)
            });
        }
        else {
            setIsEditor(false)
        }
    }, []);

    return (
        <>
            <div id="container">
                <div id="AddTodo">
                    {isEditor && <AddTodo todoAdd={todoAdd}></AddTodo>}
                </div>
                {/* <br />
                <br />

                <div id="hr"></div> */}
                <Filter radioValue={radioValue} setRadioValue={setRadioValue}></Filter>
                {todos && <Todos radioValue={radioValue} todos={todos} todoDone={todoDone} editTodo={editTodo}></Todos>}

                {showEdit && <TodoEdit setShowEdit={setShowEdit} oneTodo={oneTodo} updatedTodo={updatedTodo} />}

                {isUptaded && <Modal.Dialog
                    id="alert_modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Zaaktualizowano zadanie </Modal.Title>
                    </Modal.Header>
                </Modal.Dialog>
                }

            </div>
        </>
    );
}


export default Todo;