import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext();
  const {isDarkTheme} = useThemeContext();
  const logo = isDarkTheme ? 'logo_black_borderless.svg' : 'logo_white_borderless.svg';

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

       <h1 className="hero__title">
           <img width="105" src={ logo } alt="go faster logo"/>
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
