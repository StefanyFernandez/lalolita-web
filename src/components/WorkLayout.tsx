import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import Behance from './Behance';
import Dribbble from './Dribbble';
import Layout from './Layout';
import Arrow from './Arrow';

interface WorkLayoutProps {
  children: ReactNode;
  name: string;
  description?: ReactElement;
  work?: string;
  personal?: boolean;
  date: string;
  role?: string;
  client?: string;
  industry?: string;
  tools: string;
}

const WorkLayout: React.FC<WorkLayoutProps> = ({
  children,
  name,
  description,
  personal,
  work,
  date,
  role,
  client,
  industry,
  tools,
}) => {
  return (
    <Layout mainClass="workDetail" workActive>
      <article className="intro">
        <Link href="/work">
          <a className="goBackClick" title="Go Back" href="/work">
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
              {!personal && <b>{work}</b>} <b>- {date}</b>
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
        </div>
      </article>
    </Layout>
  );
};

export default WorkLayout;
