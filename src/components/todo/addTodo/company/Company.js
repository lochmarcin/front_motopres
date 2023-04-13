import React from "react";

import axios from "axios";
import Url from "../../../config/url"
import AddCompany from "./addCompany";
import OneCompany from "./oneCompany";
import "./company.css"


import { Button, Container, Col, Row, Modal, Form } from "react-bootstrap"
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";


const Company = (props) => {

    const [companyName, setCompanyName] = React.useState('')
    const [companyList, setCompanyList] = React.useState(null)
    const [onlyCompanyName, setOnlyCompanyName] = React.useState([])


    // const onlyCompany = () => {

    //     let companylistApi

    //     axios.get(Url.api + '/company/get').then((response) => {
    //         companylistApi = response.data

    //         const tablica = onlyCompanyName.map(company => companylistApi.name_comp)
    //         console.log("Company let List:")
    //         console.log(tablica)
    //     });
    //     // console.log("companylistApi:")
    //     // console.log(companylistApi)
    // }

    const getCompany = () => {

        axios.get(Url.api + '/company/get/' + 'all').then((response) => {
            console.log(response.data)
            setCompanyList(response.data)
        });
    }

    const addCompanyToArray = (companyName) => {
        props.addCompanyToArray(companyName)
    }
    const removeCompanyfromArray = (companyName) => {
        props.removeCompanyfromArray(companyName)
    }

    React.useEffect(() => {
        axios.get(Url.api + '/company/get/' + 'all').then((response) => {
            console.log(response.data)
            setCompanyList(response.data)
        });
        // onlyCompany()

    }, []);

    return (
        <Modal
            show={true}
            onHide={() => props.setShowCompanyModal(false)}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Firmy</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <AddCompany getCompany={getCompany} addCompanyToArray={addCompanyToArray} />

                {companyList && <OneCompany id="oneCompany" companyList={companyList} getCompany={getCompany} removeCompanyfromArray={removeCompanyfromArray}/>}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.setShowCompanyModal(false)}>
                    Zamknij
                </Button>
                {/* <Button variant="primary" onClick={() => props.setShowCompanyModal(false)}>
                    Dodaj
                </Button> */}
            </Modal.Footer>
        </Modal>
    )

}

export default Company