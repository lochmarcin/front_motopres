import React from "react";
import axios from "axios";

import { Row, Col, Button, Form , Container} from "react-bootstrap";


const EditUser = (props) => {

    const [firstname, setFirstname] = React.useState(null);
    const [lastname, setLastname] = React.useState(null);
    // const [password, setPassword] = React.useState(null);
    const [isEditor, setIsEditor] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [username, setUsername] = React.useState(false);
   

    const addUser = (e) => {
        e.preventDefault()
        
        console.log(props.user)
    }

    React.useEffect(() => {
        console.log(props.users)
    }, []);

    
    
    return( 
        <>
            <Container>
                <Form 
                onSubmit={addUser}
                >
                    <Row className="justify-content-md-center">
                        <h4>Edycja użytkownika:</h4>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Imie:
                                <Form.Control
                                    type="text"
                                    // value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </label>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Nazwisko:
                                <Form.Control
                                    type="text"
                                    // value={props.user.lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                />
                                
                            </label>
                        </Col>
                        </Row>
                        <br/>
                        <Row className="justify-content-md-center">
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Nazwa użytkownika:
                                <Form.Control
                                    type="text"
                                    // value={props.user.username}

                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                
                            </label>
                        </Col>
                        {/* <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Hasło:
                                <Form.Control
                                    type="text"
                                    value={response.data.username}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                        </Col> */}
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
                                // onChange={(e) => setIsEditor(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                inline
                                label="- Administrator"
                                type='checkbox'
                                id={`inline-checkbox-3`}
                                // onChange={(e) => setIsAdmin(e.target.value)}

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
                </Form>
            </Container>
        </>
    )
}

export default EditUser;