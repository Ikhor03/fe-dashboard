import React from 'react'
import Layout from './Layout';
import FormProduct from '../component/formProduct';

const AddProduct = () => {
    return (
        <Layout>
            <FormProduct action={"Add New Item"} />
        </Layout>
    )
}

export default AddProduct;