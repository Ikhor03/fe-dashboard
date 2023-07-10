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
async function destroy(id) {
  await axios.delete(`${url}/api/product/${id}`)
  alert('deleted')
}

export default function Products() {

  const [products, setProducts] = React.useState();

  // fetching products...
  React.useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await axios.get(`${url}/api/product`);
    setProducts(res.data);
  }

  return (
    <React.Fragment>
      <Title>Products</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Created by</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((item) => (
            <TableRow key={item.uuid}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.User.name}</TableCell>
              <TableCell align="right">
                <Link color="primary" href={`product/edit/${item.uuid}`} sx={{ mt: 1 }}>
                  Edit | 
                </Link>
                <Link color="error" href="#" onClick={() => destroy(item.uuid)} sx={{ mt: 1 }}>
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
