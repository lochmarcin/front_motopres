import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import axios from "axios";

const AddTodo = (props) => {
    const [stan, setStan] = React.useState('')
    const [towar, setTowar] = React.useState('')
    const [collectDate, setCollectDate] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [index, setIndex] = React.useState('')
    const [bandNumber, setBandNumber] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [note, setNote] = React.useState('')

    let data

    const addOneTodo = (e) => {
        e.preventDefault()

        data = {
            'users': null,
            'company': company,
            'part': towar,
            'indexx': index,
            'quantity': null,
            'price': price,
            'band_number': bandNumber,
            'note': note,
            'collect_date': collectDate,
            'condition': stan
        }

        // console.log("Stan: " + stan)
        // console.log("towar: " + towar)
        // console.log("collectDate: " + collectDate)
        // console.log("Company: " + company)
        // console.log("Index: " + index)
        // console.log("Band Number: " + bandNumber)
        // console.log("Price: " + price)
        // console.log("Note: " + note)

        axios.post('http://127.0.0.1:5000/todo/add', {
            condition: stan,
            part: towar,
            collect_date: collectDate,
            company: company,
            indexx: index,
            band_number: bandNumber,
            price: price,
            note: note
        })
            .then(function (response) {
                
                // console.log("Dane z backendu:")
                // console.log(response.data)
                props.todoAdd(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });


    }
    // const seeData = () => {
    //     console.log(data)
    // }


    return (
        <Container>
            <Form onSubmit={addOneTodo}>
                <Row className="justify-content-md-center">
                    <Col xs="auto" sm="auto" md="auto" lg="auto" >
                        <label>Stan części
                            <Form.Select
                                value={stan}
                                onChange={(e) => setStan(e.target.value)}
                            >
                                <option>Regenerowane</option>
                                <option>Nowe / używane</option>
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

                            <Form.Control
                                type="text"
                                placeholder="Wpisz część"
                                value={collectDate}
                                onChange={(e) => setCollectDate(e.target.value)} />

                            {/* <Form.Control
                                type="text"
                                placeholder="Wpisz datę odbioru"
                                // id="datepicker"
                                value={collectDate}
                                onChange={(e) => setCollectDate(e.target.collectDate)}
                            /> */}
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
    )
}


export default AddTodo;