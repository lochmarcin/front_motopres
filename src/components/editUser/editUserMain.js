import React from "react";
import "./editUser.css"
import { Table, Form, Button, Accordion } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import axios from "axios";
import Url from "../config/url";
import EditMainInfo from "./EditMainInfo";
import ChangePass from "./changePassword"
import Logi from "./logs"




const EditUser = () => {

    // const [user_id, setUserId] = React.useState(null);
    const [userMainInfo, setUserMainInfo] = React.useState(null);
    const [userId, setUserId] = React.useState(null)
    const [logs, setLogs] = React.useState(null);
    const [search, setSearch] = React.useState("")


    React.useEffect(async () => {

        try {
            axios.get(Url.api + '/auth/me').then((response) => {
                setUserId(response.data.user_id)
                console.log("response: " + response.data.user_id)
            });
        } catch (err) {
            console.log("Error: from axios.get(Url.api + '/auth/me'), get /auth/me to set iduser" + err)
        }

    });


    return (
        <div id="container">
            <Accordion id="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Twoje dane: </Accordion.Header>
                    <Accordion.Body>
                        {userId && <EditMainInfo userId={userId} ></EditMainInfo>}

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Zmiana Hasła</Accordion.Header>
                    <Accordion.Body>
                        {userId && <ChangePass userId={userId} />}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Logi</Accordion.Header>
                    <Accordion.Body>

                        {userId && <Logi logs={logs} userId={userId} />}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div >

    )
}

export default EditUser