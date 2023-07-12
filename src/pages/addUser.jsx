import React from 'react'
import Layout from './Layout';
import FormUser from '../component/formUser';
import Title from '../component/Title';

const AddUser = () => {
  return (
    <Layout>
      <Title>User</Title>
      <FormUser action={"Add New User"} />
    </Layout>
  )
}

export default AddUser;