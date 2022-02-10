import React from 'react';

interface ImageProps {
  source: string;
  title: string;
  className?: string;
  format?: string;
  width?: string;
  height?: string;
}

const Image: React.FC<ImageProps> = ({
  source,
  title,
  className,
  format,
  width,
  height,
}) => {
  const disableContextMenu = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ): void => {
    e.preventDefault();
  };
  return (
    <picture className={`image${className || ''}`}>
      <source
        type="image/webp"
        srcSet={`${source}@1x.webp 1x, 
                ${source}@2x.webp 2x, 
                ${source}@4x.webp 4x`}
      />
      <source
        type={`image/${format || 'png'}`}
        srcSet={`${source}@1x.${format || 'png'} 1x, 
                ${source}@2x.${format || 'png'} 2x, 
                ${source}@4x.${format || 'png'} 4x`}
      />
      <img
        onContextMenu={disableContextMenu}
        alt={title}
        width={width || '100%'}
        height={height || '100%'}
        src={`${source}@1x.${format || 'png'}`}
        srcSet={`${source}@1x.${format || 'png'} 1x, 
                ${source}@2x.${format || 'png'} 2x, 
                ${source}@4x.${format || 'png'} 4x`}
      />
    </picture>
  );
};

export default Image;
