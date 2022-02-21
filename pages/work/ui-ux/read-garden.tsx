import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const cpGo: React.FC = () => (
  <WorkLayout
    name="Read Garden"
    workPlace="Binpar"
    role="UI/UX + Front End Design"
    date="2021"
    client="Binpar"
    industry="Technology"
    relatedLinks={['lalaland', 'cp-go']}
    description={
      <>
        <p>
          This project consisted of creating a platform, with landing, web,
          desktop and mobile application, that could convert any digital book
          format into secure HTML and allow any type of user to upload, share
          and sell their content with whoever they want using a viewer with
          multiple features like bookmarks, highlighters and an advanced search
          engine.
        </p>
        <p>
          We’ve designed all the elements from the logo and the graphic line, to
          the viewer interface and usability.
        </p>
        <p>
          The main challenge we had was that we needed to have a clean design
          that would work with any two color combination as clients could upload
          their logo, choose their primary and secondary colors and even the
          thickness of the borders and icons.
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
