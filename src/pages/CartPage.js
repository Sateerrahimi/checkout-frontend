import React from "react";
import { Container } from "@mui/material";
import ShoppingCart from "../components/Cart/Cart";
import useCart from "../hooks/useCart";

const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <Container maxWidth="md">
            <ShoppingCart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        </Container>
    );
};

export default CartPage;
