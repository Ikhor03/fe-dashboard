import React from 'react'
import Layout from './Layout';
import FormProduct from '../component/formProduct';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} = useParams();
    return (
        <Layout>
            <FormProduct action={"Update Item"} id = {id} />
        </Layout>
    )
}

export default UpdateProduct;