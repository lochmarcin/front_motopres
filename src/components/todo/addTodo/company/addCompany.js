import React from "react";
import axios from "axios";
import Url from "../../../config/url"
import { Button, Form, Alert } from "react-bootstrap"
import "./company.css"



const AddCompany = (props) => {

    const [companyName, setCompanyName] = React.useState('')
    const [companyExsist, setCompanyExsist] = React.useState(false)

    const addCompany = () => {
        // e.preventDefault()

        axios.post(Url.api + '/company/add', {
            name_comp: companyName
        })
            .then(function (response) {
                // console.log(response.data.success)
                if (response.data.success) {
                    setCompanyName('')
                    props.addCompanyToArray(companyName)
                    props.getCompany()
                }
                else
                    setCompanyExsist(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div id="addCompany">
                <Form.Control
                    value={companyName}
                    type="text"
                    placeholder="Wpisz nazwę firmy..."
                    onChange={(e) => setCompanyName(e.target.value)}
                    autoFocus
                />
                <Button variant="primary" id="addCompanyButton"
                    onClick={() => addCompany()}
                >
                    Dodaj
                </Button>
            </div>
            {companyExsist && <Alert variant='danger'>Firma już istnieje</Alert>}
        </>

    )
}

export default AddCompany
