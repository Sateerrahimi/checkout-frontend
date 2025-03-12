import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ textAlign: "center", marginTop: 5 }}>
            <Typography variant="h3" color="error" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="body1" paragraph>
                Oops! The page you are looking for does not exist.
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                Go Back to Home
            </Button>
        </Container>
    );
};

export default NotFound;
