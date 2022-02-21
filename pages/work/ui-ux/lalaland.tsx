import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const lalaland: React.FC = () => (
  <WorkLayout
    name="Lalaland"
    workPlace="Binpar"
    role="UI/UX + Front End Design"
    date="2020"
    client="IE University"
    industry="Education"
    relatedLinks={['cervantes', 'dr-q']}
    description={
      <>
        <p>
          This landing was created for IE University’s economics and politics
          faculty.
        </p>
        <p>
          The mission was to get more engagement and interest from the students
          in the case studies, since their content was quite dense, we looked
          for a way to make it more visual.
        </p>
        <p>
          This particular case study was based on the creation of a
          constitutional law reform in a fictitious country called “Lalaland”,
          divided into 6 chapters, each of which ended with a short quiz, the
          results of which could be downloaded, and successively be discussed in
          class.
        </p>
        <p>
          We’ve created a pretty modern and eye-catching brand identity for the
          country, the navigation had parallax effect, we’ve used animations of
          the shapes as the user scrolled down, and a scroll lock when the user
          reached the end of a chapter to ensure the fulfillment of each quiz.
        </p>
        <p>
          And of course, the web was fully responsive on desktop, tablet and
          mobile, it also was tested on the most common browsers.
        </p>
      </>
    }
    tools="Sketch - React"
  >
    <div className="item">
      <Image source="../../img/works/lalaland/01" title="Lalaland" />
    </div>
    <div className="item">
      <Image source="../../img/works/lalaland/02" title="Lalaland" />
    </div>
    <div className="item big">
      <Image source="../../img/works/lalaland/04" title="Lalaland" />
    </div>
    <div className="item">
      <Image source="../../img/works/lalaland/05" title="Lalaland" />
    </div>
    <div className="item">
      <Image source="../../img/works/lalaland/06" title="Lalaland" />
    </div>
    <div className="item big">
      <Image source="../../img/works/lalaland/07" title="Lalaland" />
    </div>
  </WorkLayout>
);

export default lalaland;
