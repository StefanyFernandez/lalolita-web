import React, { useState } from 'react';
import { tabs, TabsNames, works } from '../../src/utils/worksList';
import Layout from '../../src/components/Layout';
import WorkItem from '../../src/components/WorkItem';
import Behance from '../../src/components/Behance';
import Dribbble from '../../src/components/Dribbble';
import RandomThings from '../../src/components/RandomThings';
import Drive from '../../src/components/Drive';

const work: React.FC = () => {
  const [tabSelected, changeTab] = useState<TabsNames>(TabsNames.All);

  const setTabSelected = (tab: TabsNames): void => {
    changeTab(tab);
  };

  const getTab = (): JSX.Element => {
    if (
      tabSelected === TabsNames.Web ||
      tabSelected === TabsNames.Branding ||
      tabSelected === TabsNames.Lettering ||
      tabSelected === TabsNames.Other
    ) {
      return (
        <>
          {!works.filter((i) => i.category === tabSelected).length && (
            <RandomThings tabSelected={tabSelected} />
          )}
          {works?.length > 0 &&
            works
              .filter((i) => i.category === tabSelected)
              .map((i) => (
                <WorkItem
                  key={i.link}
                  link={i.link}
                  category={i.category}
                  name={i.name}
                  image={i.image}
                  size={i.size}
                />
              ))}
        </>
      );
    }
    return (
      <>
        {works.map((i) => (
          <WorkItem
            key={i.link}
            link={i.link}
            category={i.category}
            name={i.name}
            image={i.image}
            size={i.size}
          />
        ))}
      </>
    );
  };

  return (
    <Layout title="Works" mainClass="work" workActive>
      <article className="intro">
        <h2>
          Our <br />
          Work<span className="dot">.</span>
        </h2>
        <div className="content">
          <p>
            Hi! Here you can find a showcase of our amazing projects, we like to
            manage each one with the respect, passion and the love it deserves.
          </p>
          <p>
            The type of projects we like are those that challenge us and keep us
            always learning.
          </p>
        </div>
      </article>
      <article className="tabsWrapper">
        <div className="tabsHeader" role="tablist">
          {tabs.map((i) => (
            <button
              type="button"
              role="tab"
              data-toggle="tab"
              key={i.category}
              title={i.category}
              className={i.category === tabSelected ? 'active' : ''}
              onClick={(): void => setTabSelected(i.category)}
            >
              {i.category}
            </button>
          ))}
        </div>
        <ul
          className={`tabsContent${
            !works.filter((i) => i.category === tabSelected).length &&
            tabSelected !== TabsNames.All
              ? ' empty'
              : ''
          }`}
        >
          {getTab()}
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

export default work;
