import React from 'react'
import Layout from './Layout';
import FormUser from '../component/formUser';

const AddUser = () => {
  return (
    <Layout>
        <FormUser action={"Add New User"}/>
    </Layout>
  )
}

export default AddUser;