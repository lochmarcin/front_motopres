import React from "react";
import axios from "axios";
import { Form, Button, ProgressBar } from "react-bootstrap";
import Url from "../config/url"


const Apk = () => {

    const [selectedFile, setSelectedFile] = React.useState(null)


    const sendFile = (e) => {
        e.preventDefault()

        const formData = new FormData();

        // Update the formData object
        formData.append(
            "apk",
            selectedFile,
            selectedFile.name
        );

        const config = {
            onUploadProgress: progressEvent => console.log(progressEvent.loaded)
        }
        axios.post(Url + '/upload/addApk', formData, config)
        console.log("WYŚLIJ BUTTON")
    }


    const changeFile = (e) => {
        setSelectedFile(e.target.files[0])
        console.log("setSelectedFile")
    }

    const fileData = () => {
        console.log("fileData")
        console.log(selectedFile)
        if (selectedFile) {

            return (
                <div>
                    <h2>Szczegóły pliku:</h2>
                    <p>Nazwa: {selectedFile.name}</p>
                    <p>Typ pliku: {selectedFile.type}</p>
                    <p>Rozmiar: {Math.round((selectedFile.size / 1000000) * 100) / 100}</p>
                    <p>
                        Ostatnio modyfikowany:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Wybierz plik a następnie kliknij Wyślij</h4>
                </div>
            );
        }
    };



    const now = 60;
    return (
        <>
            <div id="container">
                <Form onSubmit={sendFile}>
                    <Form.Group controlId="formFile" className="mb-3">

                        <Form.Label>Dodaj plik instalacyjny aplikacji</Form.Label>
                        <Form.Control
                            type="file"
                            name="apk"
                            onChange={(e) => changeFile(e)} />
                        <br />
                        {fileData()}
                        <Button variant="primary" type="submit">
                            Wyślij
                        </Button>
                        <br />
                        <br />

                        <ProgressBar now={now} label={`${now}%`} />
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Apk