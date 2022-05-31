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
import NewLogged from "../config/Logged"
import Slash from './fromSlash'
import Logged from "../config/isLogged"
import Permission from "../config/isPermission"
import ApkMain from "../superuser/updateApkMain"
import ToLogin from "./toLogin";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



const Todo = () => {
    const navigate = useNavigate()

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

            <Routes>
                <Route path="/" element={
                    <Slash></Slash>
                }>
                </Route>
                <Route path="/login" element={
                    <>
                        <Slash />
                        <Login userWho={userWho} userRole={userRole}></Login>
                    </>
                }>
                </Route>
                <Route path="/todo" element={
                    <>
                        <BrowserView>
                            {/* <Logged></Logged> */}
                            {/* {NewLogged} */}
                            {/* {NewLogged() === true ?
                                <>
                                    <Menu role={role} who={who}></Menu>
                                    <br />
                                    <br />
                                    <TodoAll role={role}></TodoAll>
                                </>
                                : <ToLogin />
                            } */}
                            {NewLogged && <>
                                <Menu role={role} who={who}></Menu>
                                <br />
                                <br />
                                <TodoAll role={role}></TodoAll>
                            </>}

                        </BrowserView>
                        <MobileView>
                            <p>MOBILE VIEW</p>
                        </MobileView>
                    </>
                }>
                </Route>
                <Route path="/users" element={
                    <>
                        {NewLogged &&
                            <>
                                <Permission></Permission>
                                {/* <Logged></Logged> */}
                                <Menu who={who}></Menu>
                                <br />
                                <br />
                                <MainUser></MainUser>
                            </>
                        }
                        {/* <ToLogin /> */}
                    </>
                }>
                </Route>
                <Route path="/doneTodo" element={
                    <>
                        {/* <Logged></Logged> */}
                        {NewLogged &&
                            <><Menu who={who}></Menu>
                                <br />
                                <br />
                                <Donetodo></Donetodo>
                            </>
                        }
                        {/* <ToLogin /> */}
                    </>
                }>
                </Route>

                {/* <Route path="/test" element={
                             NewLogged()
                    }>
                    </Route> */}

                <Route path="/sendApkFile" element={
                    <>
                        <Permission></Permission>
                        {NewLogged &&
                            <>
                                <Menu who={who}></Menu>
                                <br />
                                <br />
                                <ApkMain></ApkMain>
                            </>
                        }
                        <ToLogin />
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

        </>
    )
}

export default Todo