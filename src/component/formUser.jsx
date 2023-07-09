import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Title from './Title';

const FormUser = ({action}) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get("email"),
        password: data.get("password"),
      });
    };

  return (
    <div>
        <Title>User</Title>
          <Typography component="h1" variant="h5">
              {action}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
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
                          type="confirmPassword"
                          id="confirmPassword"
                          autoComplete="new-password"
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

export default FormUser;