import React from "react";
import "./login.css"
import logo from '../../img/logo-czarne.png'

import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Col, Container, Form, Row, Button } from "react-bootstrap"

const Login = () => {
    return (
        <>
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
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nazwa użytkownika</Form.Label>
                                    <Form.Control type="email" placeholder="Wpisz nazwę użytkownika ..." />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Hasło</Form.Label>
                                    <Form.Control type="password" placeholder="Hasło ..." />
                                </Form.Group> 
                                <Button variant="primary" type="submit" className="button_zaloguj">
                                    Zaloguj
                                </Button>
                                
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}
export default Login