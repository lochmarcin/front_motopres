import React from "react";
import axios from "axios";

import OneUser from "./OneUser";

const UserList = () => {

    const [users, setUsers] = React.useState(null);

    React.useEffect(() => {
        axios.get('http://127.0.0.1:5000/users/get').then((response) => {
            setUsers(response.data);

        });
    }, []);

    return(
        <>
        <p>Lista uzytkowników:</p>
        {users && <OneUser 
        users={users} 
        // todoDelete={todoDelete}
        ></OneUser>}
        </>
    )
}
export default UserList