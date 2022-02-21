import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const cpGo: React.FC = () => (
  <WorkLayout
    name="CP GO"
    workPlace="Binpar"
    role="UI/UX + Front End Design"
    date="2021"
    client="CP Grupo"
    industry="Real State Development"
    relatedLinks={['dr-q', 'read-garden']}
    description={
      <>
        <p>
          This webapp was a game created for CP Grupo, a real state development
          company.
        </p>
        <p>
          The mission was to develop an online community for the owners of the
          homes that the client sells, focused on a fun way to build and
          decorate their homes, create them families, and get to know their
          neighbors while the real house was being builded.
        </p>
        <p>
          We’ve designed all the elements from the logo and graphic line, to the
          game interface, characters and elements of this digital world,
          inspired by games like Minecraft, The Sims and Habbo Hotel.
        </p>
        <p>
          The main challenge was that all the elements of the game interface
          were accessible from mobile devices in landscape, since they were the
          most used by the players.
        </p>
      </>
    }
    tools="Sketch - Magicavoxel - React"
  >
    <div className="item">
      <Image source="../../img/works/cp-go/03" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/02" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/04" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/05" title="lola" />
    </div>
    <div className="item big">
      <Image source="../../img/works/cp-go/06" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/07" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/08" title="lola" />
    </div>
    <div className="item big">
      <Image source="../../img/works/cp-go/09" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/10" title="lola" />
    </div>
    <div className="item tall">
      <Image source="../../img/works/cp-go/11" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/12" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/13" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/14" title="lola" />
    </div>
    <div className="item tall">
      <Image source="../../img/works/cp-go/18" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/15" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/cp-go/17" title="lola" />
    </div>
  </WorkLayout>
);

export default cpGo;
