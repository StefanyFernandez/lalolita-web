import React from 'react';
import Head from 'next/head';

interface MainHeadProps {
  title?: string;
}

const MainHead: React.FC<MainHeadProps> = ({ title }) => (
  <Head>
    <title>LaLolita | {title}</title>
    <meta name="description" content="LaLolita Design Studio" />
    <meta httpEquiv="Content-Language" content="en" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
    <meta name="msapplication-TileColor" content="#00aba9" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
    />
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-JG9SND76YZ"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="/css/variables.css" />
    <link rel="stylesheet" type="text/css" href="/css/reset.css" />
    <link rel="stylesheet" type="text/css" href="/css/common-styles.css" />
    <link rel="stylesheet" type="text/css" href="/css/header.css" />
    <link rel="stylesheet" type="text/css" href="/css/footer.css" />
    <link rel="stylesheet" type="text/css" href="/css/home.css" />
    <link rel="stylesheet" type="text/css" href="/css/about.css" />
  </Head>
);

export default MainHead;
