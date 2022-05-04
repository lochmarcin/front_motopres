import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";



const OneFile = (props) => {

    const [actualFile, setActualFile] = React.useState(false)

    console.log(props.files)
    let dataFiles = Array.from(props.files)

    // setActual(file.actual)

    return (
        <>
            <div id="fileList">
                {dataFiles.map((file) => {

                    return (
                        <>

                            <Card className="text-center" key={file.id}>
                                {/* <Card.Header>Featured</Card.Header> */}
                                <Card.Body>
                                    <Card.Text>
                                        <Row>
                                            <Col>
                                                {file.wersja}
                                            </Col>
                                            <Col>
                                                {file.url}
                                            </Col>
                                            <Col>
                                                {file.createdAt}
                                            </Col>
                                            <Form.Check
                                                name="group1"
                                                type="radio"
                                                onClick={() => {
                                                    console.log("change radios: " + file.id)
                                                    file.actual = !file.actual
                                                }}
                                                checked={file.actual}
                                                id="chuj"
                                            />
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </>
                    )
                })}
            </div>
        </>
    )
}

export default OneFile
