import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const chickyNuggies: React.FC = () => (
  <WorkLayout
    print
    name="Chicky Nuggies"
    personal
    date="2020"
    tools="Procreate"
    relatedLinks={['stay-weird', 'timing', 'luck']}
  >
    <div className="item big square">
      <Image
        source="../../img/works/chicky-nuggies/chicky-nuggies"
        title="Chicky Nuggies"
      />
    </div>
    <p className="quote">Baby Yoda approves</p>
  </WorkLayout>
);

export default chickyNuggies;
