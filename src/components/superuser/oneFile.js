import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { ReactComponent as Download } from './../../svg/download.svg';
import "./file.css"



const OneFile = (props) => {

    const [actualFile, setActualFile] = React.useState(false)

    console.log(props.files)
    let dataFiles = Array.from(props.files)

    // setActual(file.actual)

    return (
        <>
            {dataFiles.map((file) => {

                return (

                    <tr>
                        <td>
                            <Form.Check
                                name="group1"
                                type="radio"
                                onClick={() => {
                                    console.log("change radios: " + file.id)
                                    file.actual = file.actual
                                }}
                                // checked={file.actual}
                                id="chuj"
                            />
                        </td>
                        <td>
                            {file.wersja}
                        </td>
                        <td>
                            {file.url}
                           
                            <Download id='downloadSvg' onClick={() => props.downloadFile(file.id)}/>
                        </td>
                        <td>
                            {file.createdAt}
                        </td>
                    </tr>

                )
            })}

        </>
    )
}

export default OneFile




// import React from "react";
// import { Card, Row, Col, Button, Form } from "react-bootstrap";
// import "./file.css"



// const OneFile = (props) => {

//     const [actualFile, setActualFile] = React.useState(false)

//     console.log(props.files)
//     let dataFiles = Array.from(props.files)

//     // setActual(file.actual)

//     return (
//         <>
//             <div id="fileList">
//                 {dataFiles.map((file) => {

//                     return (
//                         <>
//                             <div id="oneFileDiv">
//                                 <Form.Check
//                                     name="group1"
//                                     type="radio"
//                                     onClick={() => {
//                                         console.log("change radios: " + file.id)
//                                         file.actual = file.actual
//                                     }}
//                                     // checked={file.actual}
//                                     id="chuj"
//                                 />
//                                 <Card className="text-center" key={file.id}>
//                                     {/* <Card.Header>Featured</Card.Header> */}
//                                     <Card.Body>
//                                         <Card.Text>
//                                             <Row>
//                                                 <Col>
//                                                     {file.wersja}
//                                                 </Col>
//                                                 <Col>
//                                                     {file.url}
//                                                 </Col>
//                                                 <Col>
//                                                     {file.createdAt}
//                                                 </Col>

//                                             </Row>
//                                         </Card.Text>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </>
//                     )
//                 })}
//             </div>
//         </>
//     )
// }

// export default OneFile
