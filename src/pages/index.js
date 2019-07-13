import { Link } from 'gatsby'; 
import React from 'react';
import { Layout } from '../components/layout'; 

const HomePage = () => {
  return (
    <Layout>
      <h1>Welcome to My Website</h1>
      <p>crafted with tears and love.</p>
      <Link to="/about-me">About</Link>
    </Layout>
  );
};
export default HomePage;
