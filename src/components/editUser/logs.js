
import React from "react";
import axios from 'axios'
import Url from "../config/url"
import { ButtonGroup, ToggleButton, FloatingLabel, Form, Card, Button, Container, Col, Row, Modal } from "react-bootstrap"
import DatePicker from "react-datepicker";
import moment from "moment";

import Onelog from "./Onelog"



const Logi = () => {

    const [search, setSearch] = React.useState("")
    const [logs, setLogs] = React.useState(null);

    const [startDate, setStartDate] = React.useState(new Date(new Date().setDate(new Date().getDate() - 7)))
    const [endDate, setEndDate] = React.useState(new Date())


    const setSDate = (date) => {
        // let dateToSend = moment(date).format("YYYY-MM-DD")
        // console.log(dateToSend)
        setStartDate(date)

        axios.post(Url.api + '/logs/getMyLog',{
            startDate:date,
            endDate:endDate
        }).then((response) => {
            setLogs(response.data)
            // console.log(response.data[1])
        });
    }
    const setEDate = (date) => {
        // let dateToSend = moment(date).format("YYYY-MM-DD")
        // console.log(dateToSend)
        setEndDate(date)

        axios.post(Url.api + '/logs/getMyLog',{
            startDate:startDate,
            endDate:date
        }).then((response) => {
            setLogs(response.data)
            // console.log(response.data[1])
        });
    }

    React.useEffect(() => {
        console.log("LOGS")
        axios.get(Url.api + '/logs/getMyLog').then((response) => {
            setLogs(response.data)
            // console.log(response.data[1])
        });

    }, [])

    return (
        <>

            <Form id="search">
                <span
                    className="logsSearch">Szukajka:
                    <Form.Control type="text" placeholder="wpisz id ..." onChange={(e) => setSearch(e.target.value)} />
                </span>


                <span
                    className="logsSearch">Od:
                    <DatePicker
                        id="data_picker_logs"
                        className="form-control"
                        // locale="pl"
                        dateFormat="dd/MM/yyyy"
                        type="text"
                        selected={startDate}
                        shouldCloseOnSelect={true}
                        onChange={(date) => setSDate(date)} />
                </span>

                <span
                    className="logsSearch">Do:
                    <DatePicker
                        id="data_picker_logs"
                        className="form-control"
                        // locale="pl"
                        dateFormat="dd/MM/yyyy"
                        type="text"
                        selected={endDate}
                        shouldCloseOnSelect={true}
                        onChange={(date) => setEDate(date)} />
                </span>



            </Form>






            <br />

            {logs && <Onelog logs={logs} search={search} />}
        </>
    )
}

export default Logi