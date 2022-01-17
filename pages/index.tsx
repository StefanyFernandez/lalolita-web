import React from 'react';
import Arrow from 'src/components/Arrow';
import Image from '../src/components/Image';
import Layout from '../src/components/Layout';
import Circle from '../src/components/shapes/Circle';
import DotsLarge from '../src/components/shapes/DotsLarge';
import ShapeYellow from '../src/components/shapes/ShapeYellow';

const index: React.FC = () => (
  <Layout mainClass="home" title="Home">
    <article className="left">
      <Image source="img/lola" title="Lola" />
      <ShapeYellow />
      <DotsLarge />
      <Circle />
    </article>
    <article className="right">
      <h2>
        Hello
        <span className="dot">.</span>
      </h2>
      <h3>
        We
        <br />
        make
        <br />
        design!
      </h3>
      <h4>And we also love cats</h4>
      <a title="Email us" href="mailto:info@lalolita.design" className="click">
        Let’s talk
        <Arrow />
      </a>
    </article>
  </Layout>
);

export default index;
