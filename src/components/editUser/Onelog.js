import React from "react";
import { Card, Button, Container, Table, Col, Row, Modal, Form, ButtonGroup, ToggleButton } from "react-bootstrap"
import { Link } from "react-router-dom";
import { ReactComponent as IcoLink } from '../../svg/link.svg';
import "./editUser.css"
import Url from "../config/url"





const Onelog = (props) => {
    console.log(props)
    return (
        <>
            <Table striped bordered hover>
                <tr>
                    <td>
                        <b>Informacja</b>
                    </td>
                    <td>
                        <b>Link</b>
                    </td>
                    <td>
                        <b>Godzina</b>
                    </td>
                    <td>
                        <b>Data</b>
                    </td>
                </tr>
                {/* {console.log("Search: " + props.search)} */}
                {props.logs
                    .filter((log) => {
                        if (log.type == "todo")
                            return log
                    })
                    .filter((log) => {

                        if (props.search == "" || props.search == null)
                            return log
                        else if ((log.todoId + "").toLowerCase().includes(props.search.toLowerCase())) {
                            return log
                        }
                    })
                    .map((log) => {
                        console.log("props.search: " + props.search)
                        return (
                            <>
                                <tr>
                                    <td>
                                        {log.info}
                                    </td>
                                    <td>
                                        <Link to={`/OneTodoDetails?id=${log.todoId}`}>
                                            <IcoLink id="link" />
                                        </Link>
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

export default Onelog