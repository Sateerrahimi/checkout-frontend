import React, { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { createCheckoutSession } from "../../api/paymentApi";
import { toast } from "react-toastify";
import { CartContext } from "../../context/CartContext"; // ✅ Import CartContext

const CheckoutForm = () => {
    const { cart, clearCart } = useContext(CartContext); // ✅ Get `clearCart`

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.address) {
            toast.error("Please fill out all fields.");
            return;
        }

        try {
            const data = await createCheckoutSession(cart);
            if (data.url) {
                clearCart(); // ✅ Clears cart after successful payment
                localStorage.removeItem("cart"); // ✅ Clear stored cart data
                window.location.href = data.url; // ✅ Redirects to Stripe payment
            } else {
                toast.error("Error during checkout. Please try again.");
            }
        } catch (error) {
            console.error("Checkout failed:", error);
            toast.error("Checkout failed. Please try again.");
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
            <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            <TextField label="Address" name="address" value={formData.address} onChange={handleChange} required />

            <Button type="submit" variant="contained" color="primary">
                Proceed to Payment
            </Button>
        </Box>
    );
};

export default CheckoutForm;
