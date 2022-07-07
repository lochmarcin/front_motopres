import axios from "axios"
import Url from "../config/url"

async function Logged(){
    try {
        let dupa
        await axios.get(Url.api + '/auth/me').then((response) => {
            if (response.data.logged === false) {
                // navigate('/login')
                console.log("Logged - response.data.logged: " + response.data.logged)
                // props.setLogged(false)
                dupa = false
            }
            else if (response.data.logged === true){
                console.log("Logged - response.data.logged: " + response.data.logged)
                // props.setLogged(true)
                dupa = true
            }
        });
        return dupa
    } catch (error) {
        console.log("Error from Logged: test() get /auth/me")
        
    }
}

export default Logged