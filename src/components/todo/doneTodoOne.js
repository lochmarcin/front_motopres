import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'


import { Card, Button, Col, Row, Modal } from "react-bootstrap"


const DoneTodo = (props) => {

    const [alert, setAlert] = React.useState(false);


    const updatedAlert = () => {
        console.log("CHUJ")
        setAlert(true)
        setTimeout(
            () => setAlert(false),
            3000
        );
    }

    const delete_tudo_button = (id) => {
        updatedAlert()
        props.deleteTodo(id)
    }

    const regeneration = {
        'backgroundColor': 'lemonchiffon'
    }

    let dataTodos = Array.from(props.todos)
    return (
        <>
            {dataTodos.map((todo) => {
                return (
                    <>

                        <Card key={todo.id} id="card_one_todo" style={todo.condition == 'Nowe / używane' ? regeneration : null}>
                            <Card.Body>
                                <Card.Title>
                                    <Row>
                                        <Col>{todo.id}</Col>
                                        <Col>{todo.condition}</Col>
                                        <Col>{todo.part}</Col>
                                        <Col className="d-flex flex-row-reverse">{todo.collect_date}</Col>
                                    </Row>
                                </Card.Title>
                                <br />
                                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: 'large' }}>
                                    <Row>
                                        <Col>
                                            <label>
                                                Firma:
                                                <br />
                                                {todo.company}
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                Indeks:
                                                <br />
                                                {todo.indexx}
                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                Numer opaski:
                                                <br />
                                                {todo.band_number}
                                            </label>
                                        </Col>
                                        <Col className="d-flex flex-row-reverse">
                                            <label>
                                                Cena:
                                                <br />
                                                {todo.price}
                                            </label>
                                        </Col>
                                    </Row>
                                </Card.Subtitle>
                                <br />
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <label>
                                                Uwagi:
                                                <br />
                                                {todo.note}
                                            </label>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <span id="span_whoadd">Dodał: {todo.whoAdd}</span>
                                    </Col>
                                    <Col>
                                        <span id="span_whoadd">Wykonał: {todo.whoDone}</span>
                                    </Col>
                                    <Col className="d-flex flex-row-reverse">
                                        <Button
                                            variant="primary"
                                            type="Button"
                                            onClick={() => props.todoRestore(todo.id)}
                                        >
                                            Przywróć
                                        </Button>
                                        <Button
                                            id="button_todo_delete"
                                            variant="danger"
                                            type="Button"
                                            onClick={() => delete_tudo_button(todo.id)}
                                        >
                                            Usuń
                                        </Button>
 
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <br />
                        {alert && <Modal.Dialog
                            id="alert_modal">
                            <Modal.Header closeButton>
                                <Modal.Title>Usunięto </Modal.Title>
                            </Modal.Header>
                        </Modal.Dialog>
                        }

                    </>
                )
            })}
        </>
    )
}

export default DoneTodo;
