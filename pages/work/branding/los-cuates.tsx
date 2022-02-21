import React from 'react';
import Image from 'src/components/Image';
import WorkLayout from 'src/components/WorkLayout';

const losCuates: React.FC = () => (
  <WorkLayout
    name="Los Cuates"
    personal
    role="Branding Design"
    date="2018"
    client="Los Cuates"
    industry="Food"
    relatedLinks={['publistone']}
    description={
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
          rutrum nisl. Duis nibh justo, commodo sit amet faucibus quis, blandit
          vel felis. Sed in nunc ac mi dapibus dictum sed et leo. Sed feugiat
          lacus ligula, non tincidunt nibh pulvinar a.
        </p>
        <p>
          Donec malesuada, eros eget ultrices aliquet, ipsum neque consequat
          leo, eu scelerisque ante purus nec ante. Integer id pretium est. In
          hac habitasse platea dictumst. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Cras ultricies lacus
          sit amet neque commodo, ut porta massa imperdiet. Mauris nec porta
          lectus. Cras congue, mi non pharetra egestas, lectus libero porttitor
          eros, egestas egestas orci ipsum et ante. Duis neque sapien, malesuada
          eget est in, laoreet rhoncus metus. Aenean a enim at augue fringilla
          tempor.
        </p>
      </>
    }
    tools="Illustrator - Photoshop"
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

export default losCuates;
