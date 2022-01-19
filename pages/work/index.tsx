import React from 'react';
import Link from 'next/link';
import Layout from '../../src/components/Layout';

const work: React.FC = () => (
  <Layout title="Works">
    <h2>work</h2>
    <Link href="/work/nowo">
      <a href="/work/nowo">nowo</a>
    </Link>
  </Layout>
);

export default work;
