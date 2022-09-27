
import React from "react";
import axios from 'axios'
import Url from "../config/url"
import { ButtonGroup, ToggleButton, FloatingLabel, Form, Card, Button, Container, Col, Row, Modal } from "react-bootstrap"

import Onelog from "./Onelog"



const Logi = () => {

    const [search, setSearch] = React.useState("")
    const [logs, setLogs] = React.useState(null);

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
                <Form.Control type="text" placeholder="Szukaj po id ..." onChange={(e) => setSearch(e.target.value)} />
            </Form>
            <br/>

            {logs && <Onelog logs={logs} search={search} />}
        </>
    )
}

export default Logi