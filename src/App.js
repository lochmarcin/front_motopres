import React from 'react';
import './App.css';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Todo from './components/todo/todoMain';
import Login from './components/auth/login'


function App() {

  return (
    <Todo></Todo>
  );
}

export default App;
