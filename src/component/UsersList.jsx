import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, email, role) {
  return { id, name, email, role };
}

const rows = [
  createData(
    0,
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
  ),
  createData(
    1,
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
  ),
  createData(
    4,
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Users() {
  return (
    <React.Fragment>
      <Title>User</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell align="right">
                <Link color="primary" href="edit" onClick={preventDefault} sx={{ mt: 3 }}>
                  Edit
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
