import React, { CSSProperties, ReactNode } from 'react';

export type IconSizes =
  | 'tiny'
  | 'small'
  | 'default'
  | 'regular'
  | 'medium'
  | 'big'
  | 'large';

export interface IconProps {
  size?: IconSizes;
  className?: string;
  color?: string;
  children?: ReactNode;
  viewBox?: string;
  style?: CSSProperties;
}

const Icon: React.FC<IconProps> = ({
  size,
  className,
  children,
  viewBox,
  style,
}) => (
  <i className={`icon ${size || ' default'}${className || ''}`} style={style}>
    <svg width="100%" height="100%" viewBox={viewBox || '0 0 24 24'}>
      {children}
    </svg>
  </i>
);

export default Icon;
