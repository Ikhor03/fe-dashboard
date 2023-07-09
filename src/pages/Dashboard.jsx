import * as React from 'react';
import Layout from './Layout';
import Welcome from '../component/Welcome';
import Products from '../component/Products';
import { Divider, Grid, Paper } from '@mui/material';

export default function Dashboard() {
  return (
    <Layout>
      <Grid item xs={12} >
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
        <Welcome/>
        </Paper>
      </Grid>
      <Divider sx={{ my: 1 }} />
      
      <Products />
    </Layout>
  );
}
