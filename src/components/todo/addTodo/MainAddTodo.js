import React from "react";
import AddTodo from "./addTodo"
import axios from "axios"
import Url from "../../config/url"



const MainAddTodo = (props) => {

    const [companyArray, setCompanyArray] = React.useState(null)
    // const [companies, setCompanies] = React.useState(null)

    const getCompanies = () => {

        console.log("Get companies")
        axios.get(Url.api + '/company/get/' + 'name_comp')
            .then((response) => {
                console.log(response.data)
                // setCompanies(response.data)
                const arr = response.data.map(object => object.name_comp)
                setCompanyArray(arr)
            });
    }
    const todoAdd = async () => {
        props.getData()
    };
    React.useEffect(() => {
        getCompanies()
    }, [])

    return (
    <>
        {companyArray && <AddTodo todoAdd={todoAdd} companyArray={companyArray} />}
    </>
    )
}

export default MainAddTodo
