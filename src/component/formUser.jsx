import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const FormUser = ({ action, id }) => {
    const url = process.env.REACT_APP_ENDPOINT;
    const navigate = useNavigate();
    const [msg, setMsg] = React.useState('');
    const [role, setRole] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await axios.get(`${url}/api/user/${id}`);
                setName(response.data.name);
                setEmail(response.data.email);
                setRole(response.data.role);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.message);
                }
            }
        };
        id && getUserById();
    }, [id, url]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let name = data.get("name");
        let email = data.get("email");
        let password = data.get("password");
        let confirmPassword = data.get("confirmPassword");
        
        try {
            if (!id) {
                await axios.post(`${url}/api/user`, {
                    name,
                    email,
                    password,
                    confirmPassword,
                    role
                }).then(res => {
                    if (res.data.error) {
                        setMsg(res.data.message)
                    } else {
                        alert(res.data.message)
                        navigate("/users");
                    };
                });
            } else {
                await axios.put(`${url}/api/user/${id}`, {
                    name,
                    email,
                    password,
                    confirmPassword,
                    role
                }).then(res => {
                    if (res.data.error) {
                        setMsg(res.data.message)
                    } else {
                        alert(res.data.message)
                        navigate("/users");
                    };
                });
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.message);
            }
        }
    };

    const handleChange = (e) => {
        setRole(e.target.value);
    }

    return (
        <div>
            <Typography component="h1" variant="h5" >
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
                            label="Name"
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            name="confirmPassword"
                            label="confirmPassword"
                            type="password"
                            id="confirmPassword"
                            autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="role">Role</InputLabel>
                            <Select
                                labelId="role"
                                id="role"
                                value={role}
                                label="role"
                                onChange={handleChange}
                            >
                                <MenuItem value={'admin'}>admin</MenuItem>
                                <MenuItem value={'user'}>user</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    {action}
                </Button>
            </Box>
        </div>
    )
}

export default FormUser;