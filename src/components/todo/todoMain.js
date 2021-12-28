import React from "react";
import Menu from "./menu"
import Todos from "./oneTodo"
import AddTodo from "./addTodo";
import Donetodo from "./doneTodo";
import "./todoMain.css"
import UserEdit from "./usersEdit"
import TodoAll from "./todo"
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"



function updateList() {
    axios.get('http://motopres.tebuty.pl/todo/get')
        .then(res => {
            const todos = res.data;
            // this.setState({ todos });
            console.log("wyniki: " + todos[0])
        })
}

class Todo extends React.Component {
    state = {
        todos: []
    }

    render() {
        return (
            <>
                <Router>
                    <Menu></Menu>
                    <br />
                    <br />

                    <Routes>
                        <Route path="/todo" element={
                            <TodoAll></TodoAll>
                        }>
                        </Route>
                        <Route path="/users" element={
                            <UserEdit></UserEdit>
                        }>
                        </Route>
                        <Route path="/doneTodo" element={
                            <Donetodo></Donetodo>
                        }>
                        </Route>
                    </Routes>
                </Router>
            </>
        )
    }
}
export default Todo