import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Title from './Title';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const FormUser = ({action}) => {
    const url = process.env.REACT_APP_ENDPOINT;
    const navigate = useNavigate();
    const [msg, setMsg] = React.useState('');
    const [role, setRole] = React.useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
        let name = data.get("name");
        let email = data.get("email");
        // let role = data.get("role");
        let password = data.get("password");
        let confirmPassword = data.get("confirmPassword");
        
        try {
            const res = await axios.post(`${url}/api/user`, {
                name,
                email,
                password,
                role,
                confirmPassword
            });
            // console.log(name, email, role, password, confirmPassword)
            console.log(res.data)
            // navigate("/users");
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
        <Title>User</Title>
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
                          label="Name"
                          autoFocus
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
                  Save
              </Button>
          </Box>
    </div>
  )
}

export default FormUser;