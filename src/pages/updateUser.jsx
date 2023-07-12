import React from 'react'
import Layout from './Layout';
import FormUser from '../component/formUser';
import { useParams } from 'react-router-dom';
import Title from '../component/Title';

const UpdateUser = () => {
    const {id} = useParams();
    return (
        <Layout>
            <Title>User</Title>
            <FormUser action={"Update"} id={id} />
        </Layout>
    )
}

export default UpdateUser;