import React from "react";
import Menu from "./menu"
import Todos from "./oneTodo"
import AddTodo from "./addTodo";
import Donetodo from "./doneTodo";
import "./todoMain.css"
import UserEdit from "../user/usersEdit"
import TodoAll from "./todo"
import Login from "../auth/login";
import Logout from "../auth/logout";
import MainUser from "../user/userMain";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"



// function updateList() {
//     axios.get('http://motopres.tebuty.pl/todo/get')
//         .then(res => {
//             const todos = res.data;
//             // this.setState({ todos });
//             console.log("wyniki: " + todos[0])
//         })
// }



class Todo extends React.Component {
    // state = {
    //     todos: []
    // }
    
    // navigate = useNavigate()

    render() {
        return (
            <>
                <Router>


                    <Routes>
                        <Route path="/login" element={
                            <Login></Login>
                        }>
                        </Route>
                        <Route path="/todo" element={
                            <>
                                <Menu></Menu>
                                <br />
                                <br />
                                <TodoAll></TodoAll>
                            </>
                        }>
                        </Route>
                        <Route path="/users" element={
                            <>
                            <Menu></Menu>
                            <br />
                            <br />
                            <MainUser></MainUser>
                            </>
                        }>
                        </Route>
                        <Route path="/doneTodo" element={
                            <>
                                <Menu></Menu>
                                <br />
                                <br />
                            <Donetodo></Donetodo>
                            </>
                        }>
                        </Route>
                        <Route path="/logout" element={
                            <Logout></Logout>
                        }>
                        </Route>
                    </Routes>
                </Router>
            </>
        )
    }
}
export default Todo