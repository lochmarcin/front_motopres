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

    const idUser = async () => {

        try {
            await axios.get(Url.api + '/auth/me').then((response) => {
                setUserId(response.data.user_id)
                console.log("response: " + response.data.user_id)
                console.log("user_id: " + userId)
                return userId
            });
        } catch (err) {
            console.log("Error: from editUserMain, get /auth/me to set iduser" + err)
        }
    }
    // const getInfoAboutUser = async () => {

    //     try {
    //         await axios.get(Url + '/users/getOne/' + userId).then((response) => {
    //             setUserMainInfo(response.data)
    //             console.log("response /users/getOne/: ")
    //             console.log(response.data)
    //         });
    //     } catch (err) {
    //         console.log("Error: from editUserMain, get /users/getOne/ " + err)
    //     }
    // }


    React.useEffect(() => {


        // const gettata = async () =>{
        //     try {
        //         await getInfoAboutUser()
        //     } catch (err) {
        //         console.log("gettata: " + err)
        //     }
        // }
        const getid = async () => {
            try {
                await idUser()
            } catch (err) {
                console.log("gettata: " + err)
            }
        }
        getid()

        // // idUser().then(() => {getInfoAboutUser()})
        // idUser().then((response) => {
        //     console.log("ID user from use Effect: " + response)
        // })

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
                        {userId && <Logi userId={userId} />}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div >

    )
}

export default EditUser