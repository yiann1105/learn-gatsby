import { Link } from 'gatsby'; 
import React from 'react';
import { Layout } from '../components/layout'; 
const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>Man... I'm sorry for you</p>
      <Link to="/">Home</Link>
    </Layout>
  );
};
export default NotFoundPage;