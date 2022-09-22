import React from "react";
import axios from "axios";

import OneUser from "./OneUser";
import EditUser from "./usersEdit";
import Url from "../config/url"


import { Modal, Button, Form, Col, Row, Container } from "react-bootstrap";


const UserList = (props) => {

    const [users, setUsers] = React.useState(null);

    const [iduser, setIduser] = React.useState("")
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isEditor, setIsEditor] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [createdAt, setCreatedAt] = React.useState("")

    // const [editUser, setEditUser] = React.useState(null)
    const [isUptaded, setIsUppdated] = React.useState(false)
    const [alert, setAlert] = React.useState("")
    // const [iduser, setIduser] = React.useState(0)
    const [modalShow, setModalShow] = React.useState(false);


    const delUser = (id) => {
        console.log(id)
        const newUsers = users.filter(users => users.id !== id)
        setUsers(newUsers)

        axios.delete(Url.api + '/users/delete/' + id).then((response) => {
            console.log("Usunięto uzytkonika")
        });
    }

    const addUserToUsers = (iduser) => {
        const add = {
            'firstname': firstname,
            'lastname': lastname,
            'username': username,
            'password': password,
            'isEditor': isEditor,
            'isAdmin': isAdmin,
            'createdAt': createdAt
        }
        let newUsers = users.filter(users => users.id !== iduser)
        newUsers.push(add)
        setUsers(newUsers)


    }

    const userAdd = () => {
        setIsUppdated(true)
        setTimeout(
            () => setIsUppdated(false),
            3000
        );
    }


    const updateUser = (e) => {
        e.preventDefault()
        axios.put(Url.api + '/users/update/' + iduser, {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
            isEditor: isEditor,
            isAdmin: isAdmin
        }).then((response) => {
            console.log(response.data)
            if (response.data == true) {
                console.log("Dodano!")
                setAlert("Zaaktualizowano użytkownika")
                userAdd()
                addUserToUsers(iduser)
                setModalShow(false)
                console.log(users)
            }
            if (response.data == false) {
                console.log("Błąd!")
                setAlert("Błąd...")
                userAdd()
                setModalShow(false)
            }
        })

    }

    const modal = (id) => {
        console.log("Id " + id)
        let oneuser = users.filter(x => x.id === id)
        console.log(oneuser[0])
        // .map(x => x.foo);/

        setIduser(oneuser[0].id)
        setFirstname(oneuser[0].firstname)
        setLastname(oneuser[0].lastname)
        setUsername(oneuser[0].username)
        setIsEditor(oneuser[0].isEditor)
        setIsAdmin(oneuser[0].isAdmin)
        setCreatedAt(oneuser[0].createdAt)
        // console.log(user)
        setModalShow(true)
        // console.log(users[id])
    }

    React.useEffect(() => {
        axios.get(Url.api + '/users/get').then((response) => {
            setUsers(response.data);
        });

    }, []);

    return (
        <>
            {/* {editUser && <EditUser user={user}></EditUser>} */}


            {users && <OneUser users={users} modal={modal} delUser={delUser}></OneUser>}



            <Modal
                // {...props}
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edycja użytkownika
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form
                            onSubmit={updateUser}
                        >
                            <Row className="justify-content-md-center">
                                <Col xs="auto" sm="auto" md="auto" lg="auto" >
                                    <label>Imie:
                                        <Form.Control
                                            type="text"
                                            value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)}
                                        />
                                    </label>
                                </Col>
                                <Col xs="auto" sm="auto" md="auto" lg="auto" >
                                    <label>Nazwisko:
                                        <Form.Control
                                            type="text"
                                            value={lastname}
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
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />

                                    </label>
                                </Col>
                                <Col xs="auto" sm="auto" md="auto" lg="auto" >
                                    <label>Zmień hasło:
                                        <Form.Control
                                            type="text"
                                            placeholder="Wpisz aby zmienić hasło"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </label>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <h4>Nadaj uprawnienia:</h4>
                                <Col>

                                    <Form.Check
                                        inline
                                        checked={true}
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
                                        checked={isEditor}
                                        onChange={(e) => setIsEditor(e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <Form.Check
                                        inline
                                        label="- Administrator"
                                        type='checkbox'
                                        id={`inline-checkbox-3`}
                                        checked={isAdmin}
                                        onChange={(e) => setIsAdmin(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <Button variant="primary" type="submit" className="addTodoSubmit">
                                        Zapisz zmiany
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)}>Anuluj</Button>
                </Modal.Footer>
            </Modal>

            {isUptaded && <Modal.Dialog
                id="alert_modal">
                <Modal.Header closeButton>
                    <Modal.Title>{alert} </Modal.Title>
                </Modal.Header>
            </Modal.Dialog>
            }
        </>
    )
}
export default UserList