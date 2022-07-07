import React from "react";
import "./editUser.css"
import { Table, Form, Button } from "react-bootstrap"
import axios from "axios";
import Url from "../config/url";
import { propTypes } from "react-bootstrap/esm/Image";

const EditMainInfo = (props) => {

    const [userMainInfo, setUserMainInfo] = React.useState(null);
    const [firstname, setFirstname] = React.useState('')
    const [lastname, setLastName] = React.useState('')
    const [username, setUserName] = React.useState('')



    const editUser = async () => {
        console.log("Send Edit user")

        try {
            await axios.put(Url.api + '/updateMe/' + props.userId,{
                firstname: firstname === '' ? userMainInfo.firstname : firstname, 
                lastname: lastname === '' ? userMainInfo.lastname : lastname,
                username: username === '' ? userMainInfo.username : username
            }).then((response) => {
                setUserMainInfo(response.data)
                console.log("response /updateMe/ + props.userId")
                console.log(response.data)
            });
        } catch (err) {
            console.log("Error: from editUserMain, get /users/getOne/ " + err)
        }
    
    }

    React.useEffect(() => {
        console.log(props)
        const getInfoAboutUser = async () => {

            try {
                await axios.get(Url.api + '/users/getOne/' + props.userId).then((response) => {
                    setUserMainInfo(response.data)
                    console.log("response /users/getOne/: ")
                    console.log(response.data)
                });
            } catch (err) {
                console.log("Error: from editUserMain, get /users/getOne/ " + err)
            }
        }
        getInfoAboutUser()
    }, [])


    return (
        <>
            <h3> Twoje dane:</h3>
            {
                console.log(props.userMainInfo)

            }
            <Form onSubmit={editUser}>
                <Table id="mainInfoUserTable" striped bordered hover>
                    <tr>
                        <td>Imie</td>
                        {userMainInfo && <td><Form.Control
                            placeholder={userMainInfo.firstname} 
                            onChange={(e) => setFirstname(e.target.value)}/></td>}

                    </tr>
                    <tr>
                        <td>Nazwisko</td>
                        {userMainInfo && <td><Form.Control
                            placeholder={userMainInfo.lastname}
                            onChange={(e) => setLastName(e.target.value)} /></td>}
                    </tr>
                    <tr>
                        <td>Login:</td>
                        {userMainInfo && <td><Form.Control
                            placeholder={userMainInfo.username} 
                            onChange={(e) => setUserName(e.target.value)}/></td>}
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