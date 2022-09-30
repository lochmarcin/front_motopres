import React from "react";
import { Card, Button, Container, Table, Col, Row, Modal, Form, ButtonGroup, ToggleButton } from "react-bootstrap"
import { Link } from "react-router-dom";
import { ReactComponent as IcoLink } from '../../svg/link.svg';



const OneTodoLog = (props) => {
    console.log(props)
    return (
        <>
            <Table striped bordered hover>
                <tr>
                    <td>
                        Informacja
                    </td>
                    <td>
                        Godzina
                    </td>
                    <td>
                        Data
                    </td>
                </tr>
                {/* {console.log("Search: " + props.search)} */}
                {props.logsTodo
                    .map((log) => {
                        return (
                            <>
                                <tr>
                                    <td>
                                        {log.info}
                                    </td>
                                    <td>
                                        {log.time}
                                    </td>

                                    <td>
                                        {log.date}
                                    </td>
                                </tr>
                            </>
                        )
                    })}
            </Table>
        </>
    )
}

export default OneTodoLog