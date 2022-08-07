import React from 'react';
import classnames from 'classnames';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';
import Features from '../components/Features';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (<Layout
        title="go"
        description="causing performance">
        <header className={classnames('hero', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">
                    <ThemedImage
                        width={80}
                        alt="go faster logo"
                        sources={{
                            light: useBaseUrl('/img/logo_borderless.svg'),
                            dark: useBaseUrl('/img/logo_borderless.svg'),
                        }}
                    />
                    go faster
                </h1>

                <p>We are group of people united by the love to open source software and desire to make Go faster.</p>

                <p className="hero__subtitle">{siteConfig.tagline}</p>

                <div className={styles.buttons}>
                    <Link
                        className={classnames(
                            'button button--primary button--lg',
                            styles.getStarted,
                        )}
                        to={useBaseUrl('docs/projects/')}>
                        projects
                    </Link>
                </div>
            </div>
        </header>
        <main>
            <Features />
        </main>
    </Layout>)
}
