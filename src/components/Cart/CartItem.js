import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item, removeFromCart }) => {
    return (
        <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell>${item.price.toFixed(2)}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
            <TableCell>
                <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default CartItem;
