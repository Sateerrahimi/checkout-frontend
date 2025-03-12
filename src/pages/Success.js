import React, { useEffect, useContext, useRef } from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Success = () => {
    const navigate = useNavigate();
    const { cart, removeFromCart } = useContext(CartContext);
    const hasClearedCart = useRef(false); // ✅ Prevent multiple runs

    useEffect(() => {
        if (!hasClearedCart.current && cart.length > 0) {
            cart.forEach((item) => removeFromCart(item.id));
            localStorage.removeItem("cart");
            hasClearedCart.current = true; // ✅ Mark as completed
        }
    }, [cart, removeFromCart]); // ✅ Now includes cart and removeFromCart safely



    return (
        <Container sx={{ textAlign: "center", marginTop: 5 }}>
            <Typography variant="h4" color="success">
                🎉 Payment Successful!
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
                Thank you for your purchase. Your order has been placed successfully.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: 3 }}
                onClick={() => navigate("/")}
            >
                Back to Home
            </Button>
        </Container>
    );
};

export default Success;
