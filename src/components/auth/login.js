import React from "react";
import "./login.css"
import logo from '../../img/logo-czarne.png'
import LoginError from "./alert";

import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { Col, Container, Form, Row, Button, Alert } from "react-bootstrap"




const Login = () => {


    const [auth, setAuth] = React.useState(null);
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginError, setloginError] = React.useState(null);
    const navigate = useNavigate()


    const authorization = (e) => {
        e.preventDefault()

        axios.post('http://127.0.0.1:5000/auth/login', {
            username: login,
            password: password
        })
            .then(function (response) {
                if (response.data === "Błędne dane logowania!") {
                    setloginError(true)
                    console.log(response.data);
                }
                else {
                    setloginError(false)
                    console.log(response.data.token);
                    console.log(response.data);
                    navigate('/todo')
                }

                setAuth(response.data.token)
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return <div>
        <div id="container">
            <Container>
                <Row>
                    <Col className="col_logo">
                        <div id="container">
                            <img src={logo} className="mx-auto img-fluid" id="logo_black" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form onSubmit={authorization}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nazwa użytkownika</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz nazwę użytkownika ..."
                                    required
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Hasło</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Hasło ..."
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="button_zaloguj">
                                Zaloguj
                            </Button>
                            
                            {loginError && <LoginError></LoginError>}
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    </div>;
}



export default Login;

