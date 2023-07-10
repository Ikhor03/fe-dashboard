import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useSelector } from 'react-redux';

export default function Welcome() {
  const { user } = useSelector((state) => state.auth);

  return (
    <React.Fragment>
      <Title>Hello {user?.name}!</Title>
      <Typography component="p" variant="h4">
        WELCOME BACK
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        we glad you here...
      </Typography>
    </React.Fragment>
  );
}
