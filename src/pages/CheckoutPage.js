import React from "react";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import { Container, Typography } from "@mui/material";

const CheckoutPage = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Checkout
            </Typography>
            <CheckoutForm />
        </Container>
    );
};

export default CheckoutPage;
