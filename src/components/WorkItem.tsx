import React from 'react';
import Link from 'next/link';
import { TabsNames, WorkSizes } from 'src/utils/worksList';
import Image from './Image';

interface WorkItemProps {
  link: string;
  name: string;
  category: TabsNames;
  image: string;
  size?: WorkSizes;
}

const WorkItem: React.FC<WorkItemProps> = ({
  link,
  name,
  category,
  image,
  size,
}) => (
  <li
    className={`workItem${size ? ` ${size}` : ''}`}
    id={`${category} ${link}`}
  >
    <Link href={`/work/${link}`}>
      <a title={name} href={`/work/${link}`}>
        <p className="name">{name}</p>
      </a>
    </Link>
    <Image title={name} source={`img/works/${image}`} format="jpeg" />
  </li>
);

export default WorkItem;
