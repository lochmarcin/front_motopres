import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";

import './user.css'

const OneUser = (props) => {

    const [edit, setEdit] = React.useState(false)

    let dataUsers = Array.from(props.users)


    return (
        <>
            <div id="userlist">
                <h5>Lista użytkowników:</h5>
                {dataUsers.map((user) => {
                    return (
                        <>
                            <div className="user" key={user.id}>
                                <Card className="text-center">
                                    {/* <Card.Header>Featured</Card.Header> */}
                                    <Card.Body>
                                        <Card.Text>
                                            <Row>
                                                <Col>
                                                    {user.firstname}
                                                </Col>
                                                <Col>
                                                    {user.lastname}
                                                </Col>
                                                <Col>
                                                    <Form.Check
                                                        inline
                                                        disabled
                                                        label=" Dodawanie zleceń"
                                                        type='checkbox'
                                                        checked={user.isEditor}
                                                        id={`inline-checkbox-2${user.id}`}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Check
                                                        inline
                                                        disabled
                                                        label=" Administrator "
                                                        type='checkbox'
                                                        checked={user.isAdmin}
                                                        id={`inline-checkbox-3${user.id}`}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => props.modal(user.id)}
                                                    >Edytuj</Button>
                                                </Col>
                                                <Col>
                                                    <Button
                                                        variant="primary"
                                                        onClick={() => props.delUser(user.id)}
                                                    >Usuń</Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col id="div_createdAt">
                                                    <span>Utworzony: {user.createdAt}</span>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br />
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default OneUser