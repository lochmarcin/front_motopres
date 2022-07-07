import React from "react";
import "./editUser.css"
import { Table, Form, Button, Modal, Alert } from "react-bootstrap"
import axios from "axios";
import Url from "../config/url";


const ChangePass = (props) => {

    const [oldPassword, setOldpassword] = React.useState(null);
    const [firstNewPass, setFirstNewPass] = React.useState(null);
    const [secondNewPass, setSecondNewPass] = React.useState(null);

    const [showModal, setShowModal] = React.useState(false)
    const [errorChangePass, setErrorChangePass] = React.useState(null);
    const [errorOldPass, setErrorOldPass] = React.useState(null);




    const updatedAlert = () => {
        setShowModal(true)
        setTimeout(
            () => setShowModal(false),
            3000
        );
    }

    // Clear Form 
    const [clear, setClear] = React.useState(false);
    const clearForm = () => {
        setOldpassword('')
        setFirstNewPass('')
        setSecondNewPass('')
    }

    const checkpassword = (e) => {
        e.preventDefault()

        if (firstNewPass !== secondNewPass)
            setErrorChangePass(true)
        else if (errorOldPass === '')
            setErrorOldPass(true)
        else {
            try {
                axios.put(Url.api + '/users/changePassword/' + props.userId, {
                    oldPassword: oldPassword,
                    firstNewPass: firstNewPass,
                    secondNewPass: secondNewPass
                })
                    .then((response) => {
                        console.log(response.data)

                        if (response.data.changedPass) {
                            setErrorChangePass(false)
                            setErrorOldPass(false)
                            updatedAlert()
                            clearForm()
                        }
                        else if (response.data.wrongOldPassword) {
                            setErrorChangePass(false)
                            setErrorOldPass(true)
                            clearForm()
                        }
                    });


            } catch (error) {
                console.log("Error at send data do Change password: " + error)
            }
        }
    }

    React.useEffect(() => {
        console.log(props)

    }, [])

    return (
        <>
            <Form
                id="changePassword"
                onSubmit={checkpassword}
            >
                <Table id="mainInfoUserTable" striped bordered hover>
                    <tr>
                        <td>Wpisz stare hasło:</td>
                        <td><Form.Control
                            placeholder="Stare hasło:"
                            value={oldPassword || ""}
                            onChange={(e) => setOldpassword(e.target.value)}
                        /></td>

                    </tr>
                    <tr>
                        <td>Nowe hasło:</td>
                        <td><Form.Control
                            placeholder="Nowe hasło:"
                            value={firstNewPass || ""}
                            onChange={(e) => setFirstNewPass(e.target.value)}
                        /></td>
                    </tr>
                    <tr>
                        <td>Ponownie nowe hasło:</td>
                        <td><Form.Control
                            placeholder="Ponownie nowe hasło:"
                            value={secondNewPass || ""}
                            onChange={(e) => setSecondNewPass(e.target.value)}
                        /></td>
                    </tr>
                </Table>
                {errorOldPass && <Alert variant='danger'>Błędne stare hasło</Alert>}
                {errorChangePass && <Alert variant='danger'>Nowe hasła nie są takie same</Alert>}

                <br />
                <div id="SubmitEdit">



                    <Button
                        id="aktualizuj_Button"
                        variant="primary"
                        type="submit"
                        className="addTodoSubmit"
                    >
                        Zmień hasło
                    </Button>
                </div>
            </Form>

            {showModal && <Modal.Dialog
                id="alert_modal">
                <Modal.Header closeButton>
                    <Modal.Title>Hasło zostało zmienione! </Modal.Title>
                </Modal.Header>
            </Modal.Dialog>
            }
        </>
    )
}

export default ChangePass