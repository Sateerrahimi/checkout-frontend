import axios from "axios";
import { API_BASE_URL } from "../config";

const PAYMENT_API_URL = `${API_BASE_URL}/payment`;


// Create a checkout session
export const createCheckoutSession = async (cartItems) => {
    try {
        const response = await axios.post(
            `${PAYMENT_API_URL}/create-checkout-session`,
            cartItems,
            { headers: { "Content-Type": "application/json" } }
        );
        return response.data;
    } catch (error) {
        console.error("Checkout API error:", error);
        return { error: "Checkout failed. Please try again." };
    }
};

