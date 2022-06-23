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
import Url from "../config/url"
import EditUser from "../editUser/editUserMain"


// import Logged from "../config/isLogged"
import Permission from "../config/isPermission"
import ApkMain from "../superuser/updateApkMain"
import ToLogin from "./toLogin";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import Logged from "./fromSlash";



const Todo = () => {
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
            await axios.get(Url + '/auth/me').then((response) => {
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
        axios.get(Url + '/auth/me').then((response) => {
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
                        <BrowserView>
                            <Menu role={role} who={who}></Menu>
                            <br />
                            <br />
                            <TodoAll role={role}></TodoAll>
                        </BrowserView>
                        <MobileView>
                            <p>MOBILE VIEW</p>
                        </MobileView>
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
                        <EditUser/>
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
                    </>
                }>
                </Route>



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
                        <p>jesteś w logach</p>
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