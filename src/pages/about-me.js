import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
const AboutMePage = () => {
  return (
    <Layout>
      <h1>WELCOME</h1>
      <ul>
        <li>Software Developer</li>
        <li>UPM, Serdang, Malaysia</li>
      </ul>
      <Link to="/">Home</Link>
    </Layout>
  );
};
export default AboutMePage;
