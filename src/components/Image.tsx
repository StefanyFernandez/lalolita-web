import React from 'react';

interface ImageProps {
  source: string;
  title: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ source, title, className }) => (
  <picture className={`image${className || ''}`}>
    <source
      type="image/webp"
      srcSet={`${source}@1x.webp 1x, 
                ${source}@2x.webp 2x, 
                ${source}@4x.webp 4x`}
    />
    <source
      type="image/png"
      srcSet={`${source}@1x.png 1x, 
                ${source}@2x.png 2x, 
                ${source}@4x.png 4x`}
    />
    <img
      alt={title}
      src={`${source}@1x.png`}
      srcSet={`${source}@1x.png 1x, 
                ${source}@2x.png 2x, 
                ${source}@4x.png 4x`}
    />
  </picture>
);

export default Image;
