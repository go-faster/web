import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

       <h1 className="hero__title">
           <ThemedImage
               width={80}
               alt="go faster logo"
               sources={{
                   light: useBaseUrl('/img/logo_white_borderless.svg'),
                   dark: useBaseUrl('/img/logo_black_borderless.svg'),
               }}
           />
           go faster
       </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            about
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="go"
      description="go">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
