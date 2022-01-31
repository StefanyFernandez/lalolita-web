import React from 'react';
import Layout from '../src/components/Layout';
import ShapeCyan from 'src/components/shapes/ShapeCyan';

const error: React.FC = () => (
  <Layout title="Error" mainClass="error">
    <h2>404 Error</h2>
    <h3>Sorry, Paco ate this page</h3>
    <ShapeCyan />
  </Layout>
);

export default error;
