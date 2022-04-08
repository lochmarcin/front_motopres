import React from "react";
import axios from "axios";
import { Form, Button, ProgressBar } from "react-bootstrap";
import Url from "../config/url"
import OneFile from "./oneFile";



const Apk = () => {

    const [selectedFile, setSelectedFile] = React.useState(null)
    const [files, setFiles] = React.useState([])
    const [progress, setProgress] = React.useState('0');

    const sendFile = (e) => {
        e.preventDefault()

        const formData = new FormData();

        // Update the formData object
        formData.append(
            "apk",
            selectedFile,
            selectedFile.name
        );

        // const config = {
        //     onUploadProgress: progressEvent => console.log(progressEvent.loaded)
        // }

        
            axios.post(Url + '/upload/addApk', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (data) => {
                    //Set the progress value to show the progress bar
                    setProgress(Math.round((100 * data.loaded) / data.total));
                },
            })


        //         axios.post(Url + '/upload/addApk', formData,
        //             onUploadProgress(data) => {
        //     setProgress(Math.round((100 * data.loaded) / data.total));
        // })
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
                    <span>Nazwa: {selectedFile.name}</span><br />
                    <span>Typ pliku: {selectedFile.type}</span><br />
                    <span>Rozmiar: {Math.round((selectedFile.size / 1000000) * 100) / 100} MB</span><br />
                    <span>
                        Ostatnio modyfikowany:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </span>

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



    React.useEffect(() => {
        console.log("useEffect")

        axios.get(Url + '/upload/getFiles').then((response) => {
            console.log(response.data);
            setFiles(response.data)
        });

    }, []);

    const now = 60;
    return (
        <>
            <div id="container">
                <Form onSubmit={sendFile}>
                    <Form.Group controlId="formFile"
                        className="mb-3"
                    >

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

                        <ProgressBar now={progress} label={`${progress}%`} />
                    </Form.Group>
                </Form>

                <OneFile files={files}></OneFile>


            </div>
        </>
    )
}

export default Apk