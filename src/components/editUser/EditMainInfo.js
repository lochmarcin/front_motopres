import React from "react";
import "./editUser.css"
import { Table, Form, Button } from "react-bootstrap"
import axios from "axios";
import Url from "../config/url";
import { propTypes } from "react-bootstrap/esm/Image";

const EditMainInfo = (props) => {

    const [userMainInfo, setUserMainInfo] = React.useState(null);


    const editUser = () => {
        console.log("SEnd Edit user")
    }

    React.useEffect(()=>{
        console.log(props)
        const getInfoAboutUser = async () => {

            try {
                await axios.get(Url + '/users/getOne/' + props.userId).then((response) => {
                    setUserMainInfo(response.data)
                    console.log("response /users/getOne/: ")
                    console.log(response.data)
                });
            } catch (err) {
                console.log("Error: from editUserMain, get /users/getOne/ " + err)
            }
        }
        getInfoAboutUser()
    },[])


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
                        {userMainInfo && <td><Form.Control placeholder={userMainInfo.firstname} /></td>}

                    </tr>
                    <tr>
                        <td>Nazwisko</td>
                        {userMainInfo && <td><Form.Control placeholder={userMainInfo.lastname} /></td>}
                    </tr>
                    <tr>
                        <td>Login:</td>
                        {userMainInfo && <td><Form.Control placeholder={userMainInfo.username} /></td>}
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