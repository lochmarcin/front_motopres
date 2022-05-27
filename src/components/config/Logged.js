import axios from "axios"
import Url from "../config/url"

const Logged = () =>{
    axios.get(Url + '/auth/me').then((response) => {
        if (response.data.logged === false) {
            // navigate('/login')
            return false
        }
        else if (response.data.logged === true)
            return true
    });
}

export default Logged