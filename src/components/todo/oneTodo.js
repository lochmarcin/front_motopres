import React from "react";
import "./todoMain.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Container, Col, Row, Modal, Form } from "react-bootstrap"

const Todos = (props) => {

    
    const regeneration = {
        'backgroundColor' : 'lemonchiffon' 
    }
    // const editTodo = (id) =>{
    //     setIdTodo(id)
    //     setShowEdit(true)
    // } 

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
                                        <Col id="price" className="d-flex flex-row-reverse">
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

                                    <Col className="d-flex flex-row-reverse">
                                        <Button variant="primary" type="Button"
                                            onClick={() => props.todoDone(todo.id)}>
                                            Wykonane
                                        </Button>
                                        <Button variant="warning" type="Button"
                                        onClick={() => props.editTodo(todo.id)}
                                        >
                                            Edytuj
                                        </Button>

                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <br />
                    </>
                )
            })}
        </>
    )
}

export default Todos