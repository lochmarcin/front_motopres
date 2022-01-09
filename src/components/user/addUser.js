import React from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./user.css"


const AddUser = () => {


    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <h4>Dodawanie użytkownika:</h4>
                    <Col xs="auto" sm="auto" md="auto" lg="auto" >
                        <label>Imie:
                            <Form.Control type="text" placeholder="Wpisz imię" />
                        </label>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto" >
                        <label>Nazwisko:
                            <Form.Control type="text" placeholder="Wpisz Nazwisko" />
                        </label>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto" >
                        <label>Hasło:
                            <Form.Control type="text" placeholder="Wpisz hasło" />
                        </label>
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <h4>Nadaj uprawnienia:</h4>
                    <Col>

                        <Form.Check
                            inline
                            checked
                            label="- Dostęp do zadań"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                        />
                        
                    </Col>
                    <Col>
                        <Form.Check
                            inline
                            label="- Dodawanie zleceń"
                            type='checkbox'
                            id={`inline-checkbox-2`}
                        />
                        
                    </Col>
                    <Col>
                        <Form.Check
                            inline
                            label="- Administrator"
                            type='checkbox'
                            id={`inline-checkbox-3`}
                        />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Button variant="primary" type="submit" className="addTodoSubmit">
                            Dodaj
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AddUser