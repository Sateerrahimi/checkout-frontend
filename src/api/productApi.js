import axios from "axios";
import { API_BASE_URL } from "../config";

const PRODUCT_API_URL = `${API_BASE_URL}/products`;


// Fetch all products
export const getProducts = async () => {
    try {
        const response = await axios.get(PRODUCT_API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};


// Decrease stock when a product is added to the cart
export const decreaseProductStock = async (productId, quantity) => {
    await axios.post(`${PRODUCT_API_URL}/decrease-stock/${productId}/${quantity}`);
};
