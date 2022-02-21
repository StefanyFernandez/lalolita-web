import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const drQ: React.FC = () => (
  <WorkLayout
    name="Nowo"
    workPlace="Binpar"
    role="UI/UX + Front End Design"
    date="2019"
    client="Grupo Financiero Aserta"
    industry="Insurance"
    relatedLinks={['cp-go', 'read-garden', 'dr-q']}
    description={
      <>
        <p>
          This app was a quiz game created for medicine students, offered by
          Editorial Médica Panamericana. Every week the competition went live
          and the winner was the last one standing. Sometimes the users could
          win prizes.
        </p>
        <p>
          The mission was to get more leads and potential clients, generate a
          social community and encourage competition between universities.
        </p>
        <p>
          We’ve used the brand’s colors giving them a little touch of
          brightness, we’ve also designed a logo for the game and used blobs for
          the main graphic elements.
        </p>
        <p>
          The main challenge was to get all kinds of questions, with or without
          images, and their respective answers, in a way were the user could
          select the correct one without wasting time. The solution was to have
          the question and its images inside a scroll, and have the possible
          answers fixed below, represented with a letter and showing the
          respective option when the user pressed it.
        </p>
      </>
    }
    tools="Sketch - React Native"
  >
    <div className="item wide big">
      <Image source="../../img/works/dr-q/01" title="lola" />
    </div>
    <div className="item tall">
      <img src="../../img/works/dr-q/wireframe.gif" alt="Wireframe" />
    </div>
    <div className="item">
      <Image source="../../img/works/dr-q/03" title="lola" />
    </div>
    <div className="item">
      <Image source="../../img/works/dr-q/04" title="lola" />
    </div>
    <div className="item wide big">
      <Image source="../../img/works/dr-q/02" title="lola" />
    </div>
  </WorkLayout>
);

export default drQ;
