import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const saint: React.FC = () => (
  <WorkLayout
    print
    name="Every saint"
    personal
    date="2020"
    tools="Procreate"
    relatedLinks={['luck', 'timing', 'hello-world']}
  >
    <div className="item big square">
      <Image source="../../img/works/saint/saint" title="Saint" />
    </div>
    <p className="quote">Hate the sin, love the sinner.</p>
  </WorkLayout>
);

export default saint;
