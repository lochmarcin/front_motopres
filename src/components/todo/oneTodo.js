import React from "react";
import "./todoMain.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Container, Col, Row, Modal, Form, ButtonGroup, ToggleButton } from "react-bootstrap"

const Todos = (props) => {

    let style
    const regeneration = {
        'backgroundColor': 'lemonchiffon'
    }
    const displayNone = {
        'display': 'none'
    }

    let dataTodos = Array.from(props.todos)

    return (
        <>
            {dataTodos.map((todo) => {
                {
                    // 
                    if (todo.condition == 'Nowe / używane') {
                        if (todo.condition != props.radioValue)
                            style = displayNone
                        else
                            style = regeneration
                    }
                    if (todo.condition == 'Regenerowane')
                        if (todo.condition != props.radioValue)
                            style = displayNone
                        else
                            style = null

                    if (props.radioValue == 'Wszystko')
                        if (todo.condition == 'Nowe / używane')
                            style = regeneration
                        else
                            style = null
                }
                return (
                    <>
                        <Card
                            key={todo.id}
                            id="card_one_todo"
                            style={style}
                        >
                            <Card.Body>
                                <Card.Title>
                                    <Row>
                                        <Col>{todo.internal_id}</Col>
                                        <Col>{todo.condition}</Col>
                                        <Col>{todo.part}</Col>
                                        <Col className="d-flex flex-row-reverse">{todo.condition == 'Regenerowane' ? `${todo.time_morning == true ? 'rano' : 'wieczór'}  -  ${todo.collect_date}` : todo.collect_date}</Col>
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
                                                Kaucja/magazyn :
                                                <br />
                                                {/* {todo.deposit} */}
                                                {todo.deposit == true ? <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" height='30' width='30' color='green'><title>Checkmark</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M416 128L192 384l-96-96" /></svg> :
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" height='30' width='30' color='red'><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M368 368L144 144M368 144L144 368" /></svg>}

                                            </label>
                                        </Col>
                                        <Col>
                                            <label>
                                                Indeks:
                                                <br />
                                                {todo.indexx}
                                            </label>
                                        </Col>
                                        {todo.condition == 'Regenerowane' ? <Col>
                                            <label>
                                                Numer opaski:
                                                <br />
                                                {todo.band_number}
                                            </label>
                                        </Col> : null}

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
                                    <Col>
                                        {todo.whoRestored &&
                                            <span id="span_whoadd">Przywrócił: {todo.whoRestored}</span>
                                        }
                                    </Col>

                                    <Col className="d-flex flex-row-reverse">
                                        <Button
                                            variant="primary"
                                            type="Button"
                                            onClick={() => props.todoDone(todo.id)}>
                                            Wykonane
                                        </Button>
                                        <Button
                                            id="button_todo_delete"
                                            variant="warning"
                                            type="Button"
                                            onClick={() => props.editTodo(todo.id)}
                                        >
                                            Edytuj
                                        </Button>

                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <br style={style} />
                    </>
                )
            })}
        </>
    )
}

export default Todos