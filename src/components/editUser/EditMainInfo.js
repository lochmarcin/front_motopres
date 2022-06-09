import React from "react";
import "./editUser.css"
import { Table, Form, Button, Accordion } from "react-bootstrap"
import axios from "axios";
import Url from "../config/url";

const EditMainInfo = () => {

    const [userMainInfo, setUserMainInfo] = React.useState(null);


    const editUser = () => {
        console.log("SEnd Edit user")
    }


    

    return (
        <>
            <h3> Twoje dane:</h3>
            <Form onSubmit={editUser}>
                <Table id="mainInfoUserTable" striped bordered hover>
                    <tr>
                        <td>Imie</td>
                        <td><Form.Control placeholder={userMainInfo.firstname ? userMainInfo.firstname : "brak"} /></td>
                        <td><Form.Control placeholder={userMainInfo.firstname ? userMainInfo.firstname : "brak"} /></td>

                    </tr>
                    <tr>
                        <td>Nazwisko</td>
                        <td><Form.Control placeholder={userMainInfo.lastname ? userMainInfo.lastname : "brak"} /></td>
                    </tr>
                    <tr>
                        <td>Login:</td>
                        <td><Form.Control placeholder={userMainInfo.username ? userMainInfo.username : "brak"} /></td>
                    </tr>

                </Table>
                <h8>* Jeśli chcesz zmienić wpisz nowe i zatwierdź.</h8>
                <br />
                <div id="SubmitEdit">
                    <Button
                        id="aktualizuj_Button"
                        variant="primary"
                        type="submit"
                        className="addTodoSubmit"
                    >
                        Aktualizuj
                    </Button>
                </div>
            </Form>
        </>
    )

}

export default EditMainInfo