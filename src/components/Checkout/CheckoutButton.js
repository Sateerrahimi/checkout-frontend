import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Checkout.css";

const CheckoutButton = ({ cart }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cart.length === 0) {
            toast.warning("Your cart is empty. Add items before checkout.");
            return;
        }

        navigate("/checkout", { state: { cart } });
    };

    return (
        <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ marginTop: 3 }}
            className="checkout-button"
            onClick={handleCheckout}
        >
            Proceed to Checkout
        </Button>
    );
};

export default CheckoutButton;
