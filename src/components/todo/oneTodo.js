import React from "react";
import "./todoMain.css"
import 'bootstrap/dist/css/bootstrap.min.css'


import { Card, Button, Container, Col, Row } from "react-bootstrap"


// const todos = (todos, todoDelete) => {
const todos = (props) => {
    // const todoDelete = (id) => {
    //     console.log("delete kurwa" + id)
    // }


    // function todoDelete(id){
    //     console.log("delete kurwa")
    // }

    // console.log(todos.todos[0].company)

    let dataTodos = Array.from(props.todos)

    return (
        <>
            {dataTodos.map((todo) => {
                return (
                    <>
                        <div className="todo" key={todo.id}>
                            <Card key={todo.id}>
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>{todo.id}</Col>
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
                                        <Col className="d-flex flex-row-reverse">
                                            <Button variant="primary" type="Button" 
                                            onClick={() => props.todoDelete(todo.id)}>
                                                Wykonane
                                            </Button>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>
                            <br />
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default todos