import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap"

class AddTodo extends React.Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs="auto" sm="auto" md="auto" lg="auto" >
                        <label>Stan części
                            <Form.Select>
                                <option selected>Wybierz ...</option>
                                <option>Regenerowane</option>
                                <option>Nowe / używane</option>
                            </Form.Select>
                        </label>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto" >
                        <label>Towar:
                            <Form.Control type="text" placeholder="Wpisz część" />
                        </label>
                    </Col>
                    <Col xs="auto" sm="auto" md="auto" lg="auto" >
                        <label>Data odbioru:
                            <input type="text" className="form-control" id="datepicker" />
                        </label>
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <label>Firma:
                            <Form.Control type="text" placeholder="Wpisz znawę firmy" />
                        </label>
                    </Col>

                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <label>
                            Indeks:
                            <Form.Control type="text" placeholder="Wpisz indeks" />
                        </label>
                    </Col>

                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <label>
                            Numer opaski:
                            <Form.Control type="text" placeholder="numer opaski" />
                        </label>
                    </Col>

                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <label>Cena:
                            <Form.Control type="text" placeholder="Cena" />
                        </label>
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Col xs="auto" sm="auto" md="auto" lg="auto">
                        <label>Uwagi:
                            <Form.Control type="text" placeholder="Indeks" />
                        </label>
                    </Col>

                    <Col xs="auto" sm="auto" md="auto" lg="auto" className="d-flex flex-row-reverse">


                        <Button variant="primary" type="submit" className="addTodoSubmit">
                            Dodaj
                        </Button>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddTodo;