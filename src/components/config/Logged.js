import axios from "axios"
import Url from "../config/url"

const Logged = () =>{
    axios.get(Url + '/auth/me').then((response) => {
        if (response.data.logged === false) {
            // navigate('/login')
            console.log("Logged - response.data.logged: " + response.data.logged)
            return false
        }
        else if (response.data.logged === true){
            console.log("Logged - response.data.logged: " + response.data.logged)
            return true
        }
    });
}

export default Logged