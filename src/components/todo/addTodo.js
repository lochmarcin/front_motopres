import React from "react";
import { Col, Container, Form, Row, Button,Modal } from "react-bootstrap"
import axios from "axios";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import Url from "../config/url"




axios.defaults.withCredentials = true;

const AddTodo = (props) => {
    const [stan, setStan] = React.useState('Regenerowane')
    const [towar, setTowar] = React.useState('')
    const [collectDate, setCollectDate] = React.useState(new Date())
    const [company, setCompany] = React.useState('')
    const [index, setIndex] = React.useState('')
    const [bandNumber, setBandNumber] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [note, setNote] = React.useState('')

    const [cookie, setCookie] = React.useState('')
    const [showModal, setShowModal] = React.useState(false)


    const updatedAlert = () => {
        setShowModal(true)
        setTimeout(
            () => setShowModal(false),
            3000
        );
    }

    const addOneTodo = (e) => {
        e.preventDefault()

        let date = moment(collectDate).format("YYYY-MM-DD")


        axios.post(Url + '/todo/add', {
            condition: stan,
            part: towar,
            collect_date: date,
            company: company,
            indexx: index,
            band_number: bandNumber,
            price: price,
            note: note
        })
            .then(function (response) {
                updatedAlert()
                props.todoAdd(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });


    }



    return (
        <>
            <Container>
                <Form onSubmit={addOneTodo}>
                    <Row className="justify-content-md-center">
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Stan części
                                <Form.Select
                                    // value={(e) => setStan(e.target.value)}
                                    onChange={(e) => setStan(e.target.value)}
                                >
                                    <option disabled value="">Wybierz...</option>
                                    <option selected="selected" value="Regenerowane">Regenerowane</option>
                                    <option value="Nowe / używane">Nowe / używane</option>
                                </Form.Select>
                            </label>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Towar:
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz część"
                                    value={towar}
                                    onChange={(e) => setTowar(e.target.value)} />
                            </label>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Data odbioru:

                                <DatePicker
                                    className="form-control"
                                    // locale="pl"
                                    dateFormat="dd/MM/yyyy"
                                    type="text"
                                    selected={collectDate}
                                    shouldCloseOnSelect={true}
                                    onChange={(date) => setCollectDate(date)} />
                                {/* <Form.Control
                                type="text"
                                placeholder="Wpisz część"
                                value={collectDate}
                                onChange={(e) => setCollectDate(e.target.value)} /> */}
                            </label>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <label>Firma:
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz znawę firmy"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />
                            </label>
                        </Col>

                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <label>
                                Indeks:
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz indeks"
                                    value={index}
                                    onChange={(e) => setIndex(e.target.value)} />
                            </label>
                        </Col>

                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <label>
                                Numer opaski:
                                <Form.Control
                                    type="text"
                                    placeholder="numer opaski"
                                    value={bandNumber}
                                    onChange={(e) => setBandNumber(e.target.value)} />
                            </label>
                        </Col>

                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <label>Cena:
                                <Form.Control
                                    type="text"
                                    placeholder="Cena"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} />
                            </label>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <label>Uwagi:
                                <Form.Control
                                    type="text"
                                    placeholder="Uwagi"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)} />
                            </label>
                        </Col>

                        <Col xs="auto" sm="auto" md="auto" lg="auto" className="d-flex flex-row-reverse">


                            <Button
                                variant="primary"
                                type="submit"
                                className="addTodoSubmit"
                            >
                                Dodaj
                            </Button>

                        </Col>
                    </Row>
                </Form>
            </Container>
            <br />
            <br />
            <div id="hr"></div>

            {showModal && <Modal.Dialog
                    id="alert_modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Dodano zadanie </Modal.Title>
                    </Modal.Header>
                </Modal.Dialog>
                }
        </>
    )
}


export default AddTodo;