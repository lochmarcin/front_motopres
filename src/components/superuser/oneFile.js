import React from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { ReactComponent as Download } from './../../svg/download.svg';
import { ReactComponent as Trash } from './../../svg/trash.svg';
import "./file.css"



const OneFile = (props) => {

    

    console.log(props.files)
    let dataFiles = Array.from(props.files)

    // setActual(file.actual)

    return (
        <>
            {dataFiles.map((file) => {
                if(file.actual)
                    props.setActualFile(file.id)
                console.log(props.actualFile)
                return (

                    <tr>
                        <td>
                            <Form.Check
                                type="radio"
                                name="wersja"
                                value={file.actual}
                                // onClick={() => {
                                //     console.log("change radios: " + file.id)
                                //     file.actual = file.actual
                                // }}
                                checked={props.actualFile === file.id}
                                onChange={() => {props.onSiteChanged(file.id)}}
                                
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
                            <Trash id='downloadSvg' onClick={() => props.deleteFile(file.id)}/>
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
