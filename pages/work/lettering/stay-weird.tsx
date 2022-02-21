import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const stayWeird: React.FC = () => (
  <WorkLayout
    print
    name="Stay Weird"
    personal
    date="2020"
    tools="Procreate"
    relatedLinks={['saint', 'timing', 'hello-world']}
  >
    <div className="item big square">
      <Image
        source="../../img/works/stay-weird/stay-weird"
        title="Stay Weird"
      />
    </div>
    <p className="quote">
      Weird is always better
      <br />- Inspired by Keith Haring’s work
    </p>
  </WorkLayout>
);

export default stayWeird;
