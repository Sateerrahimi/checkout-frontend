import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css"; // ✅ Import CSS for styling

function Navbar({ cartItemCount, toggleCart }) {
    return (
        <AppBar position="static" className="navbar"> {/* ✅ Apply CSS class */}
            <Toolbar className="navbar-toolbar">
                <Typography variant="h6" className="navbar-title">
                    Online Store
                </Typography>
                <IconButton color="inherit" onClick={toggleCart} className="cart-icon">
                    <Badge badgeContent={cartItemCount} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
