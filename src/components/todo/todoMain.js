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
import Auth from '../auth/whoRoleUser'
import Slash from './fromSlash'
import Logged from "../config/isLogged"
import Permission from "../config/isPermission"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"



const Todo = () => {
    const [role, setRole] = React.useState(null)
    const [who, setWho] = React.useState(null)

    const userRole = (data) => {
        console.log(data)
        if (data.isAdmin === true)
            setRole("admin")
        else if (data.isEditor === true)
            setRole("editor")
        else
            setRole("viewer")

    }
    const userWho = (data) => {
        setWho(data)
    }

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <Slash></Slash>
                    }>
                    </Route>
                    <Route path="/login" element={
                        <Login userWho={userWho} userRole={userRole}></Login>
                    }>
                    </Route>
                    <Route path="/todo" element={
                        <>
                            <Logged></Logged>
                            <Menu role={role} who={who}></Menu>
                            <br />
                            <br />
                            <TodoAll role={role}></TodoAll>
                        </>
                    }>
                    </Route>
                    <Route path="/users" element={
                        <>
                            <Permission></Permission>
                            <Logged></Logged>
                            <Menu who={who}></Menu>
                            <br />
                            <br />
                            <MainUser></MainUser>
                        </>
                    }>
                    </Route>
                    <Route path="/doneTodo" element={
                        <>
                            <Logged></Logged>
                            <Menu who={who}></Menu>
                            <br />
                            <br />
                            <Donetodo></Donetodo>
                        </>
                    }>
                    </Route>

                    <Route path="/me" element={
                        <>
                            <Auth></Auth>
                        </>
                    }>
                    </Route>


                    <Route path="/logout" element={
                        <Logout userWho={userWho} userRole={userRole}></Logout>
                    }>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default Todo