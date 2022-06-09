import React from "react";
import "./editUser.css"
import { Table, Form, Button, Accordion } from "react-bootstrap"
import axios from "axios";
import Url from "../config/url";
import EditMainInfo from "./EditMainInfo";



const EditUser = () => {

    // const [user_id, setUserId] = React.useState(null);
    const [userMainInfo, setUserMainInfo] = React.useState(null);
    const [userId, setUserId] = React.useState(null)

    const idUser = async () => {

        try {
            await axios.get(Url + '/auth/me').then((response) => {
                setUserId(response.data.user_id)
                console.log("response: " + response.data.user_id)
                console.log("user_id: " + userId)
            });
        } catch (err) {
            console.log("Error: from editUserMain, get /auth/me to set iduser" + err)
        }
    }
    const getInfoAboutUser = async () => {

        try {
            await axios.get(Url + '/users/getOne/' + userId).then((response) => {
                setUserMainInfo(response.data)
                console.log("response /users/getOne/: ")
                console.log(response.data)
            });
        } catch (err) {
            console.log("Error: from editUserMain, get /auth/me to set iduser" + err)
        }
    }
    

    React.useEffect(() => {
        
        idUser().then(() => {getInfoAboutUser()})
        
    }, []);


    return (
        <div id="container">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Twoje dane</Accordion.Header>
                    <Accordion.Body>
                        <EditMainInfo></EditMainInfo> 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )
}

export default EditUser