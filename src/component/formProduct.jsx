import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Title from './Title';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormProduct = ({ action, id }) => {
    const url = process.env.REACT_APP_ENDPOINT;
    const navigate = useNavigate();
    const [msg, setMsg] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let name = data.get("name");
        let price = data.get("price");

        try {
            if (!id) {
                await axios.post(`${url}/api/product`, {
                    name,
                    price,
                }).then(res => alert(res.data.message));
                navigate("/products");
            } else {
                await axios.put(`${url}/api/product/${id}`, {
                    name,
                    price,
                }).then(res => alert(res.data.message));
                navigate("/products");
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.message);
            }
        }
    };

    return (
        <div>
            <Title>Product</Title>
            <Typography component="h1" variant="h5">
                {action}
            </Typography>
            <p style={{ color: "red" }}>{msg}</p>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="given-name"
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="Product Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="price"
                            label="Price"
                            name="price"
                            autoComplete="price"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Save
                </Button>
            </Box>
        </div>
    )
}

export default FormProduct;