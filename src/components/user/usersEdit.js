import React from "react";
import axios from "axios";

const EditUser = () => {

    const [users, setUsers] = React.useState(null);

    React.useEffect(() => {
        axios.get('http://127.0.0.1:5000/users/get').then((response) => {
            setUsers(response.data);

        });
    }, []);

    return( 
        <>
            <p>Edycja uzytkownika</p>
        </>
    )
}

export default EditUser;