import React from "react"

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import axios from "axios";
import moment from "moment";
import Url from "../config/url"


import { Button, Container, Col, Row, Modal, Form } from "react-bootstrap"


const TodoEdit = (props) => {
    const [id, setId] = React.useState('')
    const [condition, setCondition] = React.useState('')
    const [towar, setTowar] = React.useState('')
    const [collectDate, setCollectDate] = React.useState(new Date())
    const [time_morning, setTime_morning] = React.useState(true)
    const [deposit, setDeposit] = React.useState(false)
    const [company, setCompany] = React.useState('')
    const [index, setIndex] = React.useState('')
    const [bandNumber, setBandNumber] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [note, setNote] = React.useState('')
    const [fv, setFv] = React.useState(false)



    const editOneTodo = (e) => {
        e.preventDefault()
        let date = moment(collectDate).format("YYYY-MM-DD")

        let data = {
            id: props.oneTodo.id,
            internal_id: id,
            condition: condition,
            time_morning: time_morning,
            deposit: deposit,
            part: towar,
            collect_date: date,
            company: company,
            indexx: index,
            band_number: bandNumber,
            price: price,
            note: note,
            whoAdd: props.oneTodo.whoAdd,
            fv: fv
        }
        // console.log(data)

        axios.put(Url.api + '/todo/updateWeb/' + props.oneTodo.id, data)
            .then((response) => {
                console.log(response.data)
                if (response.data == true) {
                    console.log("Dodano!")
                    props.updatedTodo(data)
                    props.setShowEdit(false)
                }
                if (response.data == false) {
                    console.log("Błąd!")
                    // setAlert("Błąd...")
                    // userAdd()
                    // setModalShow(false)
                }
            })
    }

    React.useEffect(() => {
        // console.log(props.oneTodo)
        setId(props.oneTodo.internal_id)
        setTime_morning(props.oneTodo.time_morning)
        setDeposit(props.oneTodo.deposit)
        setCondition(props.oneTodo.condition)
        // console.log(props.oneTodo.condition)
        setTowar(props.oneTodo.part)
        setCollectDate(moment(props.oneTodo.collect_date).toDate())
        setCompany(props.oneTodo.company)
        setIndex(props.oneTodo.indexx)
        setBandNumber(props.oneTodo.band_number)
        setPrice(props.oneTodo.price)
        setNote(props.oneTodo.note)
        setFv(props.oneTodo.fv)

    }, []);
    return (
        <>
            {/* Modal EDYCJA   -----   Modal EDYCJA   -----   Modal EDYCJA   -----   Modal EDYCJA   -----   Modal EDYCJA   */}
            <Modal
                // {...props}
                show={true}
                onHide={() => props.setShowEdit(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edycja zadania -
                        {props.oneTodo.id}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {/* <span> CHUJ </span> */}
                        <Form
                            onSubmit={editOneTodo}
                        >
                            <Row className="justify-content-md-center">
                                <Col xs="auto" sm="auto" md="auto" lg="auto">
                                    <label>Id wewnętrzne:
                                        <Form.Control
                                            type="text"
                                            placeholder="Wpisz id"
                                            value={id}
                                            onChange={(e) => setId(e.target.value)}
                                        />
                                    </label>
                                </Col>
                                <Col xs="auto" sm="auto" md="auto" lg="auto" >
                                    <label>Stan części
                                        <Form.Select
                                            value={condition == 'Regenerowane' ? 'Regenerowane' : 'Nowe / używane'}
                                            onChange={(e) => setCondition(e.target.value)}
                                        >
                                            <option value="Regenerowane">Regenerowane</option>
                                            <option value="Nowe / używane">Nowe / używane</option>
                                        </Form.Select>
                                    </label>
                                </Col>
                                <Col xs="auto" sm="auto" md="auto" lg="auto" >
                                    <label>Towar:
                                        <Form.Control
                                            type="text"
                                            // placeholder="Wpisz część"
                                            value={towar}
                                            onChange={(e) => setTowar(e.target.value)}
                                        />
                                    </label>
                                </Col>
                                <Col xs="auto" sm="auto" md="auto" lg="auto" >
                                    {/* {()=>{console.log(collectDate)}} */}

                                    <label>Data odbioru:
                                        <DatePicker
                                            className="form-control"
                                            dateFormat="dd/MM/yyyy"
                                            type="text"
                                            selected={collectDate}
                                            shouldCloseOnSelect={true}
                                            onChange={(date) => setCollectDate(date)}
                                        />
                                    </label>
                                </Col>
                                <Col id="modal_edit_set_time">
                                    <div id="radio_morning">
                                        <label id="label_deposit">
                                            <Form.Check
                                                type='radio'
                                                name="time_morning"
                                                defaultChecked={true}
                                                onChange={() => setTime_morning(true)}
                                            />
                                            - rano
                                        </label>
                                        <label id="label_deposit_second">
                                            <Form.Check
                                                type='radio'
                                                name="time_morning"
                                                onChange={() => setTime_morning(false)}
                                            />
                                            - wieczór
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <Row className="justify-content-md-center">
                                <Col xs="auto" sm="auto" md="auto" lg="auto">
                                    <label id="label_deposit">
                                        <Form.Check
                                            type='checkbox'
                                            name="deposit"
                                            defaultChecked={deposit}
                                            onChange={() => setDeposit(!deposit)}
                                        />
                                        Kaucja / magazyn
                                    </label>
                                </Col>
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
                                            onChange={(e) => setIndex(e.target.value)}
                                        />
                                    </label>
                                </Col>

                                <Col xs="auto" sm="auto" md="auto" lg="auto">
                                    <label>
                                        Numer opaski:
                                        <Form.Control
                                            type="text"
                                            placeholder="numer opaski"
                                            value={bandNumber}
                                            onChange={(e) => setBandNumber(e.target.value)}
                                        />
                                    </label>
                                </Col>
                                <Col xs="auto" sm="auto" md="auto" lg="auto">
                                    <label id="label_deposit">
                                        <Form.Check
                                            type='checkbox'
                                            name="deposit"
                                            defaultChecked={fv}
                                            onChange={() => setFv(!fv)}
                                        />
                                        - FV
                                    </label>
                                </Col>

                                <Col xs="auto" sm="auto" md="auto" lg="auto">
                                    <label>Cena:
                                        <Form.Control
                                            type="text"
                                            placeholder="Cena"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
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
                                            onChange={(e) => setNote(e.target.value)}
                                        />
                                    </label>
                                </Col>

                                <Col xs="auto" sm="auto" md="auto" lg="auto" className="d-flex flex-row-reverse">


                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="addTodoSubmit"
                                    >
                                        Aktualizuj
                                    </Button>

                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => props.setShowEdit(false)}
                    >Anuluj</Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}


export default TodoEdit