import React from 'react'
import Layout from './Layout';
import FormProduct from '../component/formProduct';

const UpdateProduct = () => {
    return (
        <Layout>
            <FormProduct action={"Update Item"} />
        </Layout>
    )
}

export default UpdateProduct;