import React from 'react';
import Head from 'next/head';

interface IndexProps {
  title: string;
}

const index: React.FC<IndexProps> = () => (
  <React.Fragment>
    <Head>
      <title>Hola Lolita</title>
      <link rel="stylesheet" type="text/css" href="/styles.css" />
    </Head>
    <h1>Hola Lolita</h1>
  </React.Fragment>
);

export default index;
