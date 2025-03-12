import axios from "axios";

import { API_BASE_URL } from "../config";

const CART_API_URL = `${API_BASE_URL}/cart`;
const PRODUCT_API_URL = `${API_BASE_URL}/products`;


// Fetch all cart items
export const getCartItems = async () => {
    try {
        const response = await axios.get(CART_API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching cart items:", error);
        return []; // Return an empty array so the app doesn't crash
    }
};


// Add an item to the cart
export const addCartItem = async (item) => {
    const response = await axios.post(CART_API_URL, item);
    return response.data;
};

// Remove an item from the cart
export const removeCartItem = async (id) => {
    await axios.delete(`${CART_API_URL}/${id}`);
};

// ✅ New: Increase stock when an item is removed from the cart
export const increaseProductStock = async (productId, quantity) => {
    await axios.post(`${PRODUCT_API_URL}/increase-stock/${productId}/${quantity}`);
};
