import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const luck: React.FC = () => (
  <WorkLayout
    print
    name="Luck"
    personal
    date="2020"
    tools="Procreate"
    relatedLinks={['soul-shine', 'stay-weird', 'chicky-nuggies']}
  >
    <div className="item big square">
      <Image source="../../img/works/luck/luck" title="Luck" />
    </div>
    <p className="quote">
      Dedicate yourself and you can find yourself,
      <br />
      Standing in the hall of fame,
      <br />
      And the world’s gonna know your name,
      <br />
      ’Cause you burn with the brightest flame.
      <br />- The Script
    </p>
  </WorkLayout>
);

export default luck;
