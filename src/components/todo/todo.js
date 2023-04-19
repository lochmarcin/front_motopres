import React from "react";
import MainAddTodo from "./addTodo/MainAddTodo";
import Todos from "./oneTodo";
import axios from "axios"
import Logged from "./fromSlash"
import Filter from "./filter"
import ToastNotifi from "./toastNotifi";

import TodoEdit from "./editTodo";
import Url from "../config/url"

import { Modal } from "react-bootstrap"


import { useNavigate } from "react-router-dom"



const Todo = (props) => {
    const [showEdit, setShowEdit] = React.useState(false)
    const [showInfoToast, setShowInfoToast] = React.useState(false)
    const [oneTodo, setOneTodo] = React.useState(null)
    const [radioValue, setRadioValue] = React.useState("Wszystko");
    const [search, setSearch] = React.useState("")
    const [companyArray, setCompanyArray] = React.useState(null)
    

    const [isEditor, setIsEditor] = React.useState(false)
    const [todos, setTodos] = React.useState(null);
    const navigate = useNavigate()

    


    // const [companies, setCompanies] = React.useState(null)



    const todoDone = async (id, internal_id) => {
        const newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo)
        const data = {
            internal_id: internal_id
        }
        axios.put(Url.api + '/todo/updateDone/' + id, data)

    }
    // const todoAdd = async (data) => {
    //     const newTodo = todos
    //     newTodo.push(data)
    //     setTodos(newTodo)
    //     navigate('/todo')
    // };


    const getCompanies = () => {

        console.log("Get companies")
        axios.get(Url.api + '/company/get/' + 'name_comp')
            .then((response) => {
                console.log(response.data)
                // setCompanies(response.data)
                const arr = response.data.map(object => object.name_comp)
                setCompanyArray(arr)
            });
    }

    const editTodo = (id) => {
        console.log("Id " + id)
        let onetodo = todos.filter(x => x.id === id)
        console.log(onetodo[0])
        setOneTodo(onetodo[0])
        getCompanies()
        // setIdEditTodo(id)
        setShowEdit(true)
    }



    const updatedTodo = (data) => {
        console.log(data)
        let newTodo = todos.filter(todos => todos.id !== data.id)
        newTodo.push(data)
        setTodos(newTodo)
        // updatedAlert()
        setShowInfoToast(true)
    }

    // // const updatedAlert = () => {
    // //     setIsUptaded(true)
    // //     setTimeout(
    // //         () => setIsUptaded(false),
    // //         3000
    // //     );
    // // }
    // const [news, setNews] = React.useState()



    const getData = () => {
        axios.get(Url.api + '/todo/get').then((response) => {
            setTodos(response.data);
        });
    }

    

    React.useEffect(() => {
        getData()
        // // interval()

      
        // console.log(props.role)
        if (props.role == 'admin' || props.role == 'editor') {
            setIsEditor(true)
        }
        else if (props.role == null) {
            axios.get(Url.api + '/users/me').then((response) => {
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
                    {isEditor && <MainAddTodo getData={getData}/>}
                    {/* {isEditor && <AddTodo todoAdd={todoAdd} companyArray={companyArray} companies={companies}></AddTodo>} */}
                </div>
                
                <Filter setSearch={setSearch} radioValue={radioValue} setRadioValue={setRadioValue}></Filter>
                {todos && <Todos search={search} radioValue={radioValue} todos={todos} todoDone={todoDone} editTodo={editTodo}></Todos>}

                {showEdit && <TodoEdit companyArray={companyArray} setShowEdit={setShowEdit} oneTodo={oneTodo} updatedTodo={updatedTodo} />}

                {showInfoToast && <ToastNotifi info={'Zaaktualizowano zadanie'} showInfoToast={showInfoToast} setShowInfoToast={setShowInfoToast}/>}

            </div>
        </>
    );
}


export default Todo;