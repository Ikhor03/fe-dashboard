import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Welcome() {
  return (
    <React.Fragment>
      <Title>Hello Ikhor!</Title>
      <Typography component="p" variant="h4">
        WELCOME BACK
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        we glad you here...
      </Typography>
    </React.Fragment>
  );
}
