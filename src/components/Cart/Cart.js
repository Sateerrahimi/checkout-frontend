import React, { useContext } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button
} from "@mui/material";
import CartItem from "./CartItem";
import CheckoutButton from "../Checkout/CheckoutButton";
import { CartContext } from "../../context/CartContext";

function Cart() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ marginTop: 3 }}>
                Shopping Cart
            </Typography>

            {cart.length > 0 && (
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ marginTop: 3 }}
                    onClick={clearCart}
                >
                    Clear Cart
                </Button>
            )}

            {cart.length > 0 ? (
                <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Product</strong></TableCell>
                                <TableCell><strong>Price</strong></TableCell>
                                <TableCell><strong>Quantity</strong></TableCell>
                                <TableCell><strong>Total</strong></TableCell>
                                <TableCell><strong>Action</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((item) => (
                                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Typography sx={{ marginTop: 2, textAlign: "center", fontStyle: "italic" }}>
                    No items in cart.
                </Typography>
            )}

            {cart.length > 0 && <CheckoutButton cart={cart} clearCart={clearCart} />}
        </>
    );
}

export default Cart;
