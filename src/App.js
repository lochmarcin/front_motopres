import React from 'react';
import './App.css';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Todo from './components/todo/todoMain';
import Login from './components/auth/login'


function App() {

//   const [isLogin, setisLogin] = React.useState(null);

//   React.useEffect(() => {
//     axios.get('http://127.0.0.1:5000/todo/get').then((response) => {
//         setTodos(response.data);

//     });
// }, []);

  return (
    


    <Todo></Todo>
  );
}

export default App;
