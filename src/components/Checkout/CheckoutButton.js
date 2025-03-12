import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { toast } from "react-toastify";
import "./Checkout.css"; // ✅ Import CSS for button styling

const CheckoutButton = ({ cart }) => {
    const navigate = useNavigate(); // ✅ React Router navigation

    const handleCheckout = () => {
        if (cart.length === 0) {
            toast.warning("Your cart is empty. Add items before checkout.");
            return;
        }

        // ✅ Navigate to /checkout with cart data
        navigate("/checkout", { state: { cart } });
    };

    return (
        <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ marginTop: 3 }}
            className="checkout-button" // ✅ Styled using Checkout.css
            onClick={handleCheckout} // ✅ Navigate instead of calling API
        >
            Proceed to Checkout
        </Button>
    );
};

export default CheckoutButton;
