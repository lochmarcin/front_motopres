import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";

import './user.css' 

const OneUser = (props) => {

    let dataUsers = Array.from(props.users)

    return (
        <>
            {dataUsers.map((user) => {
                return (
                    <>
                        <div className="user" key={user.id}></div>
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
                                                id={`inline-checkbox-2`}
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Check
                                                inline
                                                disabled
                                                label=" Administrator "
                                                type='checkbox'
                                                id={`inline-checkbox-2`}
                                            />
                                        </Col>
                                        <Col>
                                            <Button variant="primary">Edytuj</Button>
                                        </Col>
                                        <Col>
                                            <Button variant="primary">Usuń</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col id="div_createdAt">
                                            <p id="div_createdAt">Utworzony: {user.createdAt}</p>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </>
                )
            })}
        </>
    )
}
export default OneUser