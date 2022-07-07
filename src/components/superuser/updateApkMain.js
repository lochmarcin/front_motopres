import React from "react";
import axios from "axios";
import { Form, Button, ProgressBar, Table } from "react-bootstrap";
import Url from "../config/url"
import OneFile from "./oneFile";
import "./file.css"
import Footer from "../todo/footer";
import { saveAs } from "file-saver";



const Apk = () => {

    const [selectedFile, setSelectedFile] = React.useState(null)
    const [files, setFiles] = React.useState([])
    const [progress, setProgress] = React.useState(0);
    const [send, setSend] = React.useState(false);

    const [actualFile, setActualFile] = React.useState(false)

    const sendFile = (e) => {
        e.preventDefault()

        const formData = new FormData();

        // Update the formData object
        formData.append(
            "apk",
            selectedFile,
            selectedFile.name
        );
        setSend(true)
        // const config = {
        //     onUploadProgress: progressEvent => console.log(progressEvent.loaded)
        // }


        axios.post(Url.api + '/upload/addApk', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (data) => {

                //Set the progress value to show the progress bar
                setProgress(Math.round((100 * data.loaded) / data.total));
            },
        })
            .then(function (response) {
                console.log(response.data.sendStatus)
                setProgress(response.data.sendStatus)
                if(response.data.sendStatus)
                    setTimeout(reloadPage, 3000)
            })
            .catch(function (error) {
                console.log(error);
            });


        //         axios.post(Url.api + '/upload/addApk', formData,
        //             onUploadProgress(data) => {
        //     setProgress(Math.round((100 * data.loaded) / data.total));
        // })
        console.log("WYŚLIJ BUTTON")
    }

    const reloadPage = () =>{
        window.location.reload(false)
    }

    const downloadFile = (id) => {
        console.log("Download File: " + id)

        saveAs(
            `http://127.0.0.1:5000/upload/download/${id}`
        );
        
    }

    const onSiteChanged = async (id) =>{
        console.log("onSiteChanged: " + id)
        await axios.put(Url.api + '/upload/updateActualFile/' + id).then((response) => {
            console.log(response.data);
            if(response.data){
                axios.get(Url.api + '/upload/getFiles').then((response) => {
                    console.log(response.data);
                    setFiles(response.data)
                });
            }
            // setFiles(response.data)
        });
    }

    const changeFile = (e) => {
        setProgress(0)
        setSelectedFile(e.target.files[0])
        console.log("setSelectedFile")
    }


    const updateActualFile = (id) => {
        console.log("Update Actual File: " + id)
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

        axios.get(Url.api + '/upload/getFiles').then((response) => {
            console.log(response.data);
            setFiles(response.data)
        });

    }, []);


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

                        {send && <ProgressBar now={progress} label={`${progress} %`} />}
                    </Form.Group>
                </Form>


                <div id="container">
                    <br />
                    <h5>Przesłane pliki: </h5>
                    <Table>
                        <thead>
                            <tr>
                                <th>Aktualne</th>
                                <th>Wersja</th>
                                <th>Link</th>
                                <th>Data przesłania</th>
                            </tr>
                        </thead>
                        <tbody>
                            <OneFile downloadFile={downloadFile} files={files} onSiteChanged={onSiteChanged} actualFile={actualFile} setActualFile={setActualFile}></OneFile>
                        </tbody>
                    </Table>

                    <Button variant="primary" onClick={() => updateActualFile(selectedFile)}>
                        Aktualizuj
                    </Button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Apk