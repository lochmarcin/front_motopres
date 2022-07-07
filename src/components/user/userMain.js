import React from "react";
import "./user.css"

import AddUser from "./addUser";
import UserList from "./UserList";

const MainUser = () => {


    return (
        <>
            <AddUser></AddUser>
            <br />
            <div id="hr"></div>
            {/* <EditUser></EditUser> */}
            <UserList></UserList>
            <br />
        </>
    )
}
export default MainUser