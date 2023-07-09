import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h5" component="hi">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
