import React from "react";
import Menu from "./menu"
import Todos from "./oneTodo"
import AddTodo from "./addTodo";
import Donetodo from "./doneTodo";
import UserEdit from "../user/usersEdit"
import TodoAll from "./todo"
import Login from "../auth/login";
import Logout from "../auth/logout";
import MainUser from "../user/userMain";
import axios from 'axios'
import Auth from '../auth/whoRoleUser'
import NewLogged from "../config/Logged"
import Slash from './fromSlash'
import Url from "../config/url"
import EditUser from "../editUser/editUserMain"
import OneTodo from "../oneTodo/oneTodoMain"
import QrTodoToDone from "../oneTodo/qrTodoToDone"
import Footer from "./footer"

import "./todoMain.css"

// import Logged from "../config/isLogged"
import Permission from "../config/isPermission"
import ApkMain from "../superuser/updateApkMain"
import ToLogin from "./toLogin";
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet, useSearchParams } from "react-router-dom"

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Logged from "./fromSlash";



const Todo = () => {
    // const [searchParams, setSearchParams] = useSearchParams()
    // const [idtodo, setIdTodo] = React.useState 
    const navigate = useNavigate()

    const [role, setRole] = React.useState(null)
    const [who, setWho] = React.useState(null)
    const [logged, setLogged] = React.useState(false)


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

    const test = async () => {

        let result
        try {
            await axios.get(Url.api + '/auth/me').then((response) => {
                if (response.data.logged === false) {
                    console.log("Logged - response.data.logged: " + response.data.logged)
                    setLogged(false)

                }
                else if (response.data.logged === true) {
                    console.log("Logged - response.data.logged: " + response.data.logged)
                    setLogged(true)
                }
            });
            return result
        } catch (error) {
            console.log("Error: test() get /auth/me")
        }
    }

    React.useEffect(() => {
        axios.get(Url.api + '/auth/me').then((response) => {
            if (response.data.logged === false) {
                // navigate('/login')
                console.log("Logged - response.data.logged: " + response.data.logged)
                // props.setLogged(false)
                setLogged(false)
            }
            else if (response.data.logged === true) {
                console.log("Logged - response.data.logged: " + response.data.logged)
                // props.setLogged(true)
                setLogged(true)
            }
        });

        // navigate('/login')
    }, []);


    return (
        <>

            <Routes>
                <Route path="/test" element={
                    <>
                        <p>TEST</p>
                        {logged === true ? <p>super</p> : <p>chujowo</p>}

                    </>
                }>
                </Route>

                <Route path="/" element={
                    <Slash></Slash>
                }>
                </Route>
                <Route path="/login" element={
                    <>
                        {/* {test} */}
                        {/* {logged === true ? navigate('/todo') : <Login userWho={userWho} userRole={userRole} />} */}
                        <Slash />
                        <Login userWho={userWho} userRole={userRole}></Login>

                    </>
                }>
                </Route>
                <Route path="/todo" element={
                    <>

                        <Menu role={role} who={who}></Menu>
                        <br />
                        <br />
                        <TodoAll role={role}></TodoAll>

                        <Footer/>
                    </>
                }>
                </Route>
                <Route path="/users" element={
                    <>
                        <Permission></Permission>
                        {/* <Logged></Logged> */}
                        <Menu who={who}></Menu>
                        <br />
                        <br />
                        <MainUser></MainUser>

                        <Footer/>
                    </>
                }>
                </Route>
                <Route path="/editMe" element={
                    <>
                        {/* <Permission></Permission> */}
                        {/* <Logged></Logged> */}
                        <Menu who={who}></Menu>
                        <br />
                        <br />
                        <EditUser />

                        <Footer/>
                    </>
                }>
                </Route>
                <Route path="/doneTodo" element={
                    <>

                        <Permission></Permission>
                        {/* <Logged></Logged> */}
                        <Menu who={who}></Menu>
                        <br />
                        <br />
                        <Donetodo />

                        <Footer/>
                    </>
                }>
                </Route>
                <Route path="/OneTodoDetails" element={
                    <>
                        <Menu who={who}></Menu>
                        <br />
                        <br />

                        <OneTodo />

                        <Footer/>
                    </>
                }></Route>

                <Route path="/QrTodone" element={
                    <>
                        <Menu who={who}></Menu>
                        <br />
                        <br />

                        <QrTodoToDone />

                        <Footer/>

                    </>
                }></Route>



                <Route path="/sendApkFile" element={
                    <>
                        <Permission />

                        <Menu who={who}></Menu>
                        <br />
                        <br />
                        <ApkMain />

                    </>
                }>
                </Route>

                <Route path="/me" element={
                    <>
                        <Auth></Auth>
                    </>
                }>
                </Route>
                <Route path="/editMe/logs" element={
                    <>
                        <Menu who={who}></Menu>
                        <br />
                        <br />
                        <p>jeste?? w logach</p>
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