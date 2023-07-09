import React from 'react'
import Layout from './Layout';
import FormUser from '../component/formUser';

const UpdateUser = () => {
    return (
        <Layout>
            <FormUser action={"Update"} />
        </Layout>
    )
}

export default UpdateUser;