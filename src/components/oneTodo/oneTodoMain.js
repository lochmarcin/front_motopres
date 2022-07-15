import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Url from "../config/url";
import { Card, Button, Container, Col, Row, Modal, Form, ButtonGroup, ToggleButton, Stack } from "react-bootstrap"
import "./../oneTodo/oneTodo.css"
import QrcodeGenerator from "./qrCodeTodo";


const OneTodo = () => {
    const navigate = useNavigate();
    const [idTodo, setIdTodo] = React.useState()
    const query = new URLSearchParams(useLocation().search);
    const id = query.get("id")
    const [src, setSrc] = React.useState('')
    const [srcToDone, setSrcToDone] = React.useState('')
    const [srcToDoneButton, setSrcToDoneButton] = React.useState('')


    const [todo, setTodo] = React.useState()


    const QrChangeToDoneTodo = async () => {
        try {
            await axios.get(Url.api + '/todo/getOne/' + id).then((response) => {
                console.log("response /todoOne/ + id")
                console.log(response.data)
                setSrc(`${Url.front}/OneTodoDetails?id=${id}`)
                setTodo(response.data)
            });
        } catch (err) {
            console.log("Error: from todoOne, get /todoOne/ + id" + err)
        }
    }

    React.useEffect(() => {
        const getInfoAboutOneTodo = async () => {
            try {
                await axios.get(Url.api + '/todo/getOne/' + id).then((response) => {
                    console.log("response /todoOne/ + id")
                    console.log(response.data)
                    setSrc(`${Url.front}/OneTodoDetails?id=${id}`)
                    setSrcToDone(`${Url.front}/QrTodone?id=${id}`)
                    setSrcToDoneButton(`/QrTodone?id=${id}`)
                    setTodo(response.data)
                });
            } catch (err) {
                console.log("Error: from todoOne, get /todoOne/ + id" + err)
            }
        }
        getInfoAboutOneTodo()
    }, []);


    return (
        <>
            <div id="container">
                <h1>Szczegóły zadania: </h1>
                <br />
                {todo && <Card
                    key={todo.id}
                    id="card_one_todo"
                // style={style}
                >
                    <Card.Body>
                        <Card.Title>
                            <Row>
                                <Col className="d-flex justify-content-center">{todo.whoDone != null ? <><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" height='30' width='30' color='green'><title>Wykonane</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M416 128L192 384l-96-96" /></svg> Zadanie wkonane</>
                                    : <><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" height='30' width='30' color='red'><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M368 368L144 144M368 144L144 368" /></svg>Zadanie nie wykonane</>}</Col>
                                {/* <Col className="d-flex flex-row-reverse">{todo.condition == 'Regenerowane' ? `${todo.time_morning == true ? 'rano' : 'wieczór'}  -  ${todo.collect_date}` : todo.collect_date}</Col> */}
                            </Row>
                        </Card.Title>
                        <br />
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
                                <Col xs="2" sm="1" md="1" lg="1">
                                    <label>
                                        Faktura:
                                        <br />
                                        {todo.fv == true ? <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" height='30' width='30' color='green'><title>TAK</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M416 128L192 384l-96-96" /></svg> :
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" height='30' width='30' color='red'><title>NIE</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="50" d="M368 368L144 144M368 144L144 368" /></svg>}
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
                        <Row >
                            <Col>
                                <span id="span_whoadd">Dodał: {todo.whoAdd}</span>
                            </Col>
                            <Col>

                                <span id="span_whoadd">Przywrócił: {todo.whoRestored == null ? '-' : todo.whoRestored}</span>

                            </Col>
                            <Col>

                                <span id="span_whoadd">Wykonał: {todo.whoDone == null ? ' - ' : todo.whoDone}</span>

                            </Col>
                        </Row>
                        <hr />
                        <Row>


                            <Col>
                                <p>Szczegóły zadania: </p>
                                {src && <QrcodeGenerator src={src} />}

                            </Col>

                            {todo.whoDone == null ? <Col>

                                <p>Zeskanuj aby wykonać zadanie: </p>
                                {srcToDone && <QrcodeGenerator src={srcToDone} />}

                                <Button
                                    variant="warning"
                                    type="Button"
                                    onClick={() => navigate(`${srcToDoneButton}`)}
                                >
                                    Wykonane
                                </Button>

                            </Col>
                                : ''
                            }

                        </Row>

                    </Card.Body>
                </Card>}
                <br />

                <Button
                    variant="warning"
                    type="Button"
                    onClick={() => navigate("/todo")}
                >
                    Wróć to Zleceń
                </Button>

            </div>
        </>
    )
}
export default OneTodo