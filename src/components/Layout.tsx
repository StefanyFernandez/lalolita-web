import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import MainHead from './MainHead';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  mainClass?: string;
  title?: string;
  aboutActive?: boolean;
  workActive?: boolean;
  contactActive?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  mainClass,
  title,
  aboutActive,
  workActive,
  contactActive,
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
        <Header
          aboutActive={aboutActive}
          workActive={workActive}
          contactActive={contactActive}
        />
        <section className="mainSection">{children}</section>
        <Footer />
      </main>
      <CookieConsent
        containerClasses="cookies"
        style={{
          background: 'var(--black-100)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        buttonStyle={{ background: 'var(--yellow)' }}
        buttonText="Yummy, got it!"
        contentStyle={{ margin: 0 }}
      >
        <div className="gif">
          <div>
            <iframe
              src={`https://giphy.com/embed/ROIBZ9ORt2phog1rPb`}
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <p className="giphyDisclaimer">
            <a
              href={`https://giphy.com/gifs/ROIBZ9ORt2phog1rPb`}
              target="_blank"
              rel="noreferrer"
              title="Go to Giphy"
            >
              via GIPHY
            </a>
          </p>
        </div>
        <p>We use cookies to make your experience better.</p>
      </CookieConsent>
    </React.Fragment>
  );
};
export default Layout;
