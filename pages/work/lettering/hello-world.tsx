import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const chickyNuggies: React.FC = () => (
  <WorkLayout
    print
    name="Hello World"
    personal
    date="2020"
    tools="Procreate"
    relatedLinks={['saint', 'timing', 'chicky-nuggies']}
  >
    <div className="item big square">
      <Image
        source="../../img/works/hello-world/hello-world"
        title="Hello World"
      />
    </div>
    <p className="quote">
      A foo walks into a bar,
      <br />
      takes a look around
      <br />
      and says “Hello World!“.
    </p>
  </WorkLayout>
);

export default chickyNuggies;
