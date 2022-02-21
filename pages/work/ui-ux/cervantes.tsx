import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const cpGo: React.FC = () => (
  <WorkLayout
    name="Cervantes"
    workPlace="Binpar"
    role="UI/UX + Front End Design"
    date="2020"
    client="Instituto Cervantes"
    industry="Education"
    relatedLinks={['read-garden', 'cp-go']}
    description={
      <>
        <p>
          This project consisted of a website and an app for the Instituto
          Cervantes reading club.
        </p>
        <p>
          The mission was to redesign the platform that they already had and
          improve the usability to make it more friendly and intuitive for the
          users.
        </p>
        <p>
          The main challenge we had was the deadline and the amount of content
          we had to organize in a logical way.
        </p>
      </>
    }
    tools="Sketch - React - React Native"
  >
    <div className="item tall">
      <Image source="../../img/works/photo-2" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/photo-4" title="lola" />
    </div>
    <div className="item tall">
      <Image source="../../img/works/photo-2" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/photo-4" title="lola" />
    </div>
    <div className="text">
      <p>this is a text section</p>
    </div>
    <div className="item tall">
      <Image source="../../img/works/photo-2" title="lola" />
    </div>
    <div className="item tall">
      <Image source="../../img/works/photo-2" title="lola" />
    </div>
    <div className="item wide">
      <Image source="../../img/works/photo-1" title="lola" />
    </div>
    <div className="item big">
      <Image source="../../img/works/photo-3" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/photo-4" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/photo-4" title="lola" />
    </div>
  </WorkLayout>
);

export default cpGo;
