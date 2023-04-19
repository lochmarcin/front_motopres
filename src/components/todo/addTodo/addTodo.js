import React from "react";
import { Col, Container, Form, Row, Button, InputGroup } from "react-bootstrap"
import axios from "axios";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import Url from "../../config/url"
import Company from "./company/Company"
// import { fireEvent } from "@testing-library/react";
import ToastNotifi from "../toastNotifi";



axios.defaults.withCredentials = true;

const AddTodo = (props) => {
    const [id, setId] = React.useState('')
    const [stan, setStan] = React.useState('Regenerowane')
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

    const [cookie, setCookie] = React.useState('')
    const [showInfoToast, setShowInfoToast] = React.useState(false)

    //ADD COMPANY
    const [showCompanyModal, setShowCompanyModal] = React.useState(false);

    const [companyArray, setCompanyArray] = React.useState([])
    // const addCompany = () => {
    //     setShowCompanyModal(true)
    //     console.log("POKAŻ MODALA!")
    // }

    const addCompanyToArray = (companyName) => {
        let companyArr = companyArray
        companyArr.push(companyName)
        setCompanyArray(companyArr)
    }
    const removeCompanyfromArray = (companyName) => {
        let companyArr = companyArray
        const index = companyArr.indexOf(companyName)
        if (index > -1) companyArr.splice(index, 1)
        // companyArr.unshift(companyName)
        setCompanyArray(companyArr)
    }

    // const updatedAlert = () => {
    //     setShowModal(true)
    //     setTimeout(
    //         () => setShowModal(false),
    //         3000
    //     );
    // }

    const addOneTodo = (e) => {
        e.preventDefault()

        let date = moment(collectDate).format("YYYY-MM-DD")

        axios.post(Url.api + '/todo/add', {
            internal_id: id,
            condition: stan,
            part: towar,
            collect_date: date,
            time_morning: time_morning,
            deposit: deposit,
            company: company,
            indexx: index,
            fv: fv,
            band_number: bandNumber,
            price: price,
            note: note
        })
            .then(function (response) {
                // updatedAlert()
                // props.todoAdd(response.data)
                setShowInfoToast(true)
                props.todoAdd()


            })
            .catch(function (error) {
                console.log(error);
            });
    }

    React.useEffect(() => {
        // companyArray = props.companyList.map(company => props.companyList.name_comp)

        console.log("Add Todo useEfect:")
        // console.log(props.companyArray)
        console.log(props.companyArray)
        setCompanyArray(props.companyArray)
    }, []);

    return (
        <>
            <Container>
                <Form onSubmit={addOneTodo}>
                    <Row className="justify-content-md-center">
                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <label>Id wewnętrzne:
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz id"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    autoFocus
                                />
                            </label>
                        </Col>
                        <Col xs="auto" sm="auto" md="auto" lg="auto" >
                            <label>Stan części
                                <Form.Select
                                    // value={(e) => setStan(e.target.value)}
                                    onChange={(e) => setStan(e.target.value)}
                                >
                                    <option disabled>Wybierz...</option>
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
                        <Col xs="auto" sm="auto" md="2" lg="2" >
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
                        <Col>
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
                                Kaucja/Magazyn
                            </label>
                        </Col>

                        <Col xs="auto" sm="auto" md="auto" lg="auto">
                            <label>Firma:
                                <InputGroup>
                                    <Form.Select
                                        // value={(e) => setStan(e.target.value)}
                                        placeholder="Wpisz znawę firmy"
                                        onChange={(e) => setCompany(e.target.value)}
                                    >
                                        <option selected="selected" value="" >Wpisz / Wybierz</option>
                                        {companyArray && <>
                                            {companyArray.map((company) => {
                                                return (
                                                    <option value={company}>{company}</option>
                                                )
                                            })}
                                        </>}
                                    </Form.Select>
                                    <InputGroup.Text
                                        id="AddCompanyInput"
                                        onClick={() => setShowCompanyModal(true)}
                                    >+</InputGroup.Text>

                                </InputGroup>
                            </label>


                            {/* <label>Stan części
                                <Form.Select
                                    // value={(e) => setStan(e.target.value)}
                                    onChange={(e) => setStan(e.target.value)}
                                >
                                    <option disabled>Wybierz...</option>
                                    <option selected="selected" value="Regenerowane">Regenerowane</option>
                                    <option value="Nowe / używane">Nowe / używane</option>
                                </Form.Select>
                            </label> */}
                        </Col>

                        <Col xs="auto" sm="auto" md="2" lg="2">
                            <label>
                                Indeks:
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz indeks"
                                    value={index}
                                    onChange={(e) => setIndex(e.target.value)} />
                            </label>
                        </Col>

                        <Col xs="auto" sm="auto" md="2" lg="2">
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

                        <Col xs="auto" sm="auto" md="2" lg="2">
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
                        <Col xs="auto" sm="auto" md="auto" lg="8">
                            <label>Uwagi:</label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                lg="6"
                                type="text"
                                placeholder="Uwagi"
                                value={note}
                                onChange={(e) => setNote(e.target.value)} />
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

            {showCompanyModal && <Company showCompanyModal={showCompanyModal} setShowCompanyModal={setShowCompanyModal} addCompanyToArray={addCompanyToArray} removeCompanyfromArray={removeCompanyfromArray} />}


            {showInfoToast && <ToastNotifi info={'Dodano zadanie'} showInfoToast={showInfoToast} setShowInfoToast={setShowInfoToast} />}
        </>
    )
}


export default AddTodo;