import React from "react";
import "./login.css"
import logo from '../../img/logo-czarne.png'
import LoginError from "./alert";

import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"
import { Col, Container, Form, Row, Button, Alert, ProgressBar } from "react-bootstrap"
import Url from "../config/url"
import { ReactComponent as Android } from './../../svg/android.svg';
import { ReactComponent as Apple } from './../../svg/apple.svg';
import FileDownload from 'js-file-download'

import FileSaver from 'file-saver';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';





const Login = (props) => {


    const [auth, setAuth] = React.useState(null);
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginError, setloginError] = React.useState(null);
    const [mobile, setMobile] = React.useState(false);
    const [progress, setProgres] = React.useState(null)

    const navigate = useNavigate()


    const authorization = (e) => {
        e.preventDefault()

        axios.post(Url.api + '/auth/login', {
            username: login,
            password: password,
        }, { withCredentials: true })
            .then(function (response) {
                if (response.data.token === null) {
                    setloginError(true)
                    console.log(response.data);
                }
                else {
                    // setloginError(false)
                    // console.log(response.data.token);
                    // console.log(response.data);
                    props.userWho(response.data.firstname)
                    props.userRole(response.data)
                    // navigate('/todo')
                    checkUser()
                }
                setAuth(response.data.token)
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    const checkUser = () => {
        axios.get(Url.api + '/auth/me')
            .then((response) => {
                if (response.data.logged === false) {
                    setloginError(true)
                    console.log(response.data.msg);
                }
                if (response.data.logged === true) {
                    navigate('/todo')
                    setloginError(false)
                }
            })
    }

    const downloadAndroid = async () => {
        // e.preventDefault()
        try {
            // console.log("Pobierz Android")
            // FileSaver.saveAs(`${Url.api}/upload/downloadAndroid`, "Motopres");
            let percentCompleted
            await axios({
                url: `${Url.api}/upload/downloadAndroid`,
                responseType: "blob", // important
                method: "GET",
                onDownloadProgress: (progressEvent) => {
                    percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log(percentCompleted) // you can use this to show user percentage of file downloaded
                    setProgres(percentCompleted)
                }
            }).then(response => {
                // console.log(response)
                FileDownload(response.data, 'Motopres.apk');
            });
            // console.log(percentCompleted)
        } catch (err) {
            console.log(err)
        }
    }


    return <div>
        <div id="container">
            <Container>
                <Row>
                    <Col className="col_logo">
                        <div id="container">
                            <img src={logo} className="mx-auto img-fluid" id="logo_black" alt="Logo Motopres" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Form onSubmit={authorization}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nazwa użytkownika</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Wpisz nazwę użytkownika ..."
                                    required
                                    value={login}
                                    onChange={(e) => setLogin(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Hasło</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Hasło ..."
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="button_zaloguj">
                                Zaloguj
                            </Button>

                            {loginError && <LoginError></LoginError>}
                        </Form>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                {/* {mobile && alert("Aby móc korzystac na telefonie pobierz aplikację mobilną")} */}
                <Row>
                    <Col md={{ span: 4, offset: 4 }} id="download">
                        <p><b>Pobierz aplikację na telefon</b></p>
                        <Button
                            variant="primary"
                            type="button"
                            className="button_download"
                            onClick={() => downloadAndroid()}>
                            {!progress && 'Pobierz'}
                            {!progress && <Android id="android" />}
                            {progress && <ProgressBar now={progress} label={`Pobrano ${progress}%`} />}
                        </Button>

                    </Col>
                </Row>
            </Container>

        </div>
    </div>;
}



export default Login;

