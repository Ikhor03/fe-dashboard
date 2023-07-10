import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios';
const url = process.env.REACT_APP_ENDPOINT;

// DELETE USER --- FUNCTION
async function destroy (id) {
  await axios.delete(`${url}/api/user/${id}`)
}

export default function Users() {
  const [users, setUsers] = React.useState();
  // fetching Users...
  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(`${url}/api/user`);
    setUsers(res.data);
  }

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
          {users?.map((user) => (
            <TableRow key={user.uuid}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell align="right">
                <Link color="primary" href={`product/edit/${user.uuid}`} sx={{ mt: 1 }}>
                  Edit |
                </Link>
                <Link color="error" href="#" onClick={() => destroy(user.uuid)} sx={{ mt: 1 }}>
                  | Delete
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
