import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MainHead from './MainHead';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  mainClass?: string;
  title?: string;
  aboutActive?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  mainClass,
  title,
  aboutActive,
}) => {
  useEffect(() => {
    const appHeight = (): void => {
      const doc = document.documentElement;
      doc.style.setProperty('--window-height', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
  });

  return (
    <React.Fragment>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <html lang="en" />
      </Helmet>
      <MainHead title={title} />
      <main className={mainClass}>
        <Header aboutActive={aboutActive} />
        <section className="mainSection">{children}</section>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
