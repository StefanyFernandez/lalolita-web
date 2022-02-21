import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import Behance from './Behance';
import Dribbble from './Dribbble';
import Layout from './Layout';
import Arrow from './Arrow';
import { Works, works } from '../utils/worksList';
import WorkItem from './WorkItem';
import Drive from './Drive';

interface WorkLayoutProps {
  children: ReactNode;
  name: string;
  description?: ReactElement;
  workPlace?: string;
  personal?: boolean;
  date: string;
  role?: string;
  client?: string;
  industry?: string;
  tools?: string;
  print?: boolean;
  relatedLinks: string | string[];
}

const WorkLayout: React.FC<WorkLayoutProps> = ({
  children,
  name,
  description,
  personal,
  workPlace,
  date,
  role,
  client,
  industry,
  tools,
  print,
  relatedLinks,
}) => {
  const related = (): Works[] => {
    const rel = [];
    for (let i = 0; i < works.length; i++) {
      const { link } = works[i];
      if (relatedLinks.includes(link)) {
        rel.push(works[i]);
      }
    }
    return rel;
  };

  return (
    <Layout
      title={name}
      mainClass={`workDetail${print ? ' print' : ''}`}
      workActive
    >
      <article className="intro">
        <Link href="/work/">
          <a className="goBackClick" title="Go Back" href="/work/">
            <Arrow />
            <p>Volver</p>
          </a>
        </Link>
        <div className="content">
          <div className={description ? 'left' : 'center'}>
            <h2 className={name.length > 7 ? 'long' : ''}>
              {name}
              <span className="dot">.</span>
            </h2>
            <p className="info">
              {personal && 'Personal project '}
              {!personal && 'Created at '}
              {!personal && <b>{workPlace}</b>} <b>- {date}</b>
            </p>
            {role && (
              <p className="info">
                Role - <b>{role}</b>
              </p>
            )}
            {!personal ? (
              <p className="info">
                Client - <b>{client}</b>
              </p>
            ) : null}
            {industry && (
              <p className="info">
                Industry - <b>{industry}</b>
              </p>
            )}
            {tools && (
              <p className="info">
                Tools - <b>{tools}</b>
              </p>
            )}
          </div>
          {description && (
            <div className="right">
              <div className="description">{description}</div>
            </div>
          )}
        </div>
      </article>
      <article className="contentWrapper">{children}</article>
      <article className="otherWorks">
        <h4>You might like these too</h4>
        <ul className="list">
          {related().map((i) => (
            <WorkItem
              key={i.link}
              link={i.link}
              category={i.category}
              name={i.name}
              image={i.image}
              size={i.size}
              detail
            />
          ))}
        </ul>
      </article>
      <article className="moreWorks">
        <h3>We have more works in here!</h3>
        <div className="icons">
          <a
            target="_blank"
            title="Go to Behance"
            rel="noreferrer"
            href="https://www.behance.net/tefyfernandez"
            className="behance"
          >
            <Behance />
          </a>
          <a
            target="_blank"
            title="Go to Dribbble"
            rel="noreferrer"
            href="https://dribbble.com/tefyfernandez"
            className="dribbble"
          >
            <Dribbble />
          </a>
          <a
            target="_blank"
            title="Go to Drive"
            rel="noreferrer"
            href="https://drive.google.com/drive/folders/1DdiODWVebV52cFL5o17qGW_pEiF3GtAU?usp=sharing"
            className="drive"
          >
            <Drive />
          </a>
        </div>
      </article>
    </Layout>
  );
};

export default WorkLayout;
