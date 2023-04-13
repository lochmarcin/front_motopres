import React from "react";
import { Table } from "react-bootstrap"
import "./company.css"
import axios from "axios";
import Url from "../../../config/url"
import { ReactComponent as Trash } from './../../../../svg/trash.svg';



const OneCompany = (props) => {


    const deleteCompany = (id, companyName) => {
        console.log("Delete company id: " + id)

        axios.delete(Url.api + '/company/delete/' + id)
            .then((result) => {
                console.log(result)
                if (result.data.success)
                    props.getCompany()
                    props.removeCompanyfromArray(companyName)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <div id="oneCompany">
            <b>Zapisane firmy:</b>
            <Table striped bordered hover>
                {console.log(props.companyList)}
                {props.companyList
                    .map((company) => {
                        return (
                            <tr>
                                <td>{company.name_comp}</td>
                                <td id="trashColumn">
                                    <Trash id='trashSvg' alt="Usuń..." onClick={() => deleteCompany(company.id, company.name_comp)} />
                                </td>
                            </tr>

                        )
                    })

                }
            </Table>
        </div>
    )
}

export default OneCompany
