import Axios from "axios";


const API_CALL_URL = "http://localhost:8080/api/";
const USER_REGISTER_GATEWAY = API_CALL_URL + "user/register";
const USERS_GATEWAY = API_CALL_URL + "users";

class ProductsService {
    registerUser(values)
    {
        let formularData = new FormData();
        formularData.append("username", values.username);
        formularData.append("password", values.password);
        formularData.append("mail", values.email);

        Axios.post(USER_REGISTER_GATEWAY, formularData).then(res => {
        console.log("user creation request sent");
        })
    }

    getUsers() { return Axios.get(USERS_GATEWAY);}

}

export default new ProductsService();