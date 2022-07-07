import React from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Alert, Modal } from "react-bootstrap";
import "./user.css"
import Url from "../config/url"



const AddUser = () => {

    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isEditor, setIsEditor] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [username, setUsername] = React.useState(false);

    const [added, setAdded] = React.useState(false)
    const [exists, setExists] = React.useState(false);

    const userAdd = () => {
        setAdded(true)
        setTimeout(
            () => setAdded(false), 
            3000
          );
    }

    const setAdmin = () => {
        setIsAdmin(!isAdmin)
    }

    const setEditor = () => {
        setIsEditor(!isEditor)
    }

    const addUser = (e) => {
        e.preventDefault()


        axios.post(Url.api + '/auth/register', {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
            isEditor: isEditor,
            isAdmin: isAdmin
        })
            .then(function (response) {
                if (response.data.exists === true) {
                    setExists(true)
                }
                else {
                    setExists(false)
                    userAdd()
                }
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        <>
            <Container id="adduser_container">
                <Form onSubmit={addUser}>
                    <Row className="justify-content-md-center">
                        <h4>Dodawanie użytkownika:</h4>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Imie:
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz imię"
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </label>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Nazwisko:
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz Nazwisko"
                                    onChange={(e) => setLastname(e.target.value)}
                                />

                            </label>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Nazwa użytkownika:
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz nazwe użytkownika"
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                            </label>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Hasło:
                                <Form.Control
                                    type="text"
                                    placeholder="Nadaj hasło"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-md-center">
                        <h4>Nadaj uprawnienia:</h4>
                        <Col>

                            <Form.Check
                                inline
                                defaultChecked={true}
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
                                defaultChecked={isEditor}
                                onChange={(e) => setEditor(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                inline
                                label="- Administrator"
                                type='checkbox'
                                id={`inline-checkbox-3`}
                                defaultChecked={isAdmin}
                                onChange={(e) => setAdmin(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" className="addTodoSubmit">
                                Dodaj
                            </Button>
                        </Col>
                    </Row>
                    {exists &&
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Alert id="alert_user_exist" variant='danger'>Uzytkownik o takiej nazwie użytkownika już istnieje</Alert>

                            </Col>
                        </Row>}

                    {exists &&
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Alert id="alert_user_exist" variant='danger'>Uzytkownik o takiej nazwie użytkownika już istnieje</Alert>

                            </Col>
                        </Row>}

                </Form>
            </Container>


            {added && <Modal.Dialog
                id="alert_modal">
                <Modal.Header closeButton>
                    <Modal.Title>Dodano użytkonika! </Modal.Title>
                </Modal.Header>
            </Modal.Dialog>
            }
        </>
    )
}
export default AddUser