import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../component/Title';

export default function NoPage() {
  return (
    <div>
      <Title>PAGE NOT FOUND</Title>
      <Typography component="p" variant="h4">
        404
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        something wrong...
      </Typography>
    </div>
  );
}
