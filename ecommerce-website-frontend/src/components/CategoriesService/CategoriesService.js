import axios from "axios";


const API_CALL_URL = "http://localhost:8080/api/";
const CATEGORIES_GATEWAY = API_CALL_URL + "categories";

class ProductsService {
    getCategories()
    {
        return axios.get(CATEGORIES_GATEWAY);
    }
}

export default new ProductsService();