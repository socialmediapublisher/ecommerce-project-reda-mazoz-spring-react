import axios from "axios";


const API_CALL_URL = "http://localhost:8080/api/";
const USERS_GATEWAY = API_CALL_URL + "users";
const PRODUCTS_GATEWAY = API_CALL_URL + "products";
const CATEGORIES_GATEWAY = API_CALL_URL + "categories";

class ProductsService {
    getProducts()
    {
        return axios.get(PRODUCTS_GATEWAY);
    }
}

export default new ProductsService();