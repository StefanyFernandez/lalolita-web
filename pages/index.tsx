import React from 'react';
import Head from 'next/head';

interface IndexProps {
  title: string;
}

const index: React.FC<IndexProps> = () => (
  <React.Fragment>
    <Head>
      <title>LaLolita</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="/styles.css" />
    </Head>
    <h1><img className='verySoonLogo' src="img/lalolita-logo-vertical.svg" /></h1>
    <h2>very soon...</h2>
  </React.Fragment>
);

export default index;
