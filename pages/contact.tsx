import React from 'react';
import Image from '../src/components/Image';
import ShapeCyan from '../src/components/shapes/ShapeCyan';
import Layout from '../src/components/Layout';
import Behance from '../src/components/Behance';
import LinkedIn from '../src/components/LinkedIn';
import Dribbble from '../src/components/Dribbble';
import Instagram from '../src/components/Instagram';
import DotsSmall from '../src/components/shapes/DotsSmall';

const contact: React.FC = () => (
  <Layout title="Contact" mainClass="contact" contactActive>
    <article className="left">
      <h2>
        Email me
        <br />
        maybe
        <span className="dot">?</span>
      </h2>
      <h3>
        Paco here
        <br /> will answer
        <br /> all your
        <br /> doubts.
      </h3>
      <h4>
        Don’t worry, we pay him with
        <br /> the finest salmon.
      </h4>
      <div className="bottom">
        <a
          title="Say hello to us"
          href="mailto:info@lalolita.design"
          className="click"
        >
          Say hello to us
        </a>
        <div className="social">
          <a
            className="behance"
            target="_blank"
            title="Go to Behance"
            rel="noreferrer"
            href="https://www.behance.net/tefyfernandez"
          >
            <Behance />
          </a>
          <a
            className="dribbble"
            target="_blank"
            title="Go to Dribbble"
            rel="noreferrer"
            href="https://dribbble.com/tefyfernandez"
          >
            <Dribbble />
          </a>
          <a
            className="instagram"
            target="_blank"
            title="Go to Instagram"
            rel="noreferrer"
            href="https://www.instagram.com/lalolita.design/"
          >
            <Instagram />
          </a>
          <a
            className="linkedIn"
            target="_blank"
            title="Go to LinkedIn"
            rel="noreferrer"
            href="https://www.linkedin.com/in/stefanyfernandezsifontes/"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
    </article>
    <article className="right">
      <Image source="img/paco" title="paco" />
      <ShapeCyan />
      <DotsSmall />
    </article>
  </Layout>
);

export default contact;
