import React from 'react'
import Layout from './Layout';
import FormUser from '../component/formUser';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const id = useParams();
    return (
        <Layout>
            <FormUser action={"Update"} id = {id} />
        </Layout>
    )
}

export default UpdateUser;