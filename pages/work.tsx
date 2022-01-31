import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import { TabsNames, works } from 'src/utils/worksList';

interface WorkItemProps {
  link: string;
  name: string;
  category: TabsNames;
}

const WorkItem: React.FC<WorkItemProps> = ({ link, name, category }) => (
  <Link href={`/work/${link}.html`}>
    <a href={`/work/${link}.html`} id={category}>
      <p>{name}</p>
      <img alt={name} src={`img/work/${link}`} />
    </a>
  </Link>
);

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
            <p>There is nothing on {tabSelected}</p>
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
          />
        ))}
      </>
    );
  };

  return (
    <Layout title="Works" mainClass="work" workActive>
      <article>
        <h2>
          Our <br />
          Works<span className="dot">.</span>
        </h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
            rutrum nisl. Duis nibh justo, commodo sit amet faucibus quis,
            blandit vel felis. Sed in nunc ac mi dapibus dictum sed et leo. Sed
            feugiat lacus ligula, non tincidunt nibh pulvinar a.
          </p>
        </div>
      </article>
      <article className="tabsWrapper">
        <div className="tabsHeader">
          <button
            type="button"
            onClick={(): void => setTabSelected(TabsNames.All)}
          >
            All
          </button>
          <button
            type="button"
            onClick={(): void => setTabSelected(TabsNames.Web)}
          >
            UI - UX
          </button>
          <button
            type="button"
            onClick={(): void => setTabSelected(TabsNames.Branding)}
          >
            Branding
          </button>
          <button
            type="button"
            onClick={(): void => setTabSelected(TabsNames.Lettering)}
          >
            Lettering
          </button>
          <button
            type="button"
            onClick={(): void => setTabSelected(TabsNames.Other)}
          >
            Other things
          </button>
        </div>
        <div className="tabsContent">
          {getTab()}
          {/* <Link href="/work/nowo">
            <a href="/work/nowo">nowo</a>
          </Link> */}
        </div>
      </article>
    </Layout>
  );
};

export default work;
