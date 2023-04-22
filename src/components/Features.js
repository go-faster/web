import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FeatureList = [
  {
    title: 'Maintaining',
    description: (
        <>Maintain high quality projects governed by Go Faster.</>
    ),
  },
  {
    title: 'Contributing',
    description: (
        <>Apply knowledge and experience to improve open source. Fix bugs, contribute features, improve performance.</>
    ),
  },
  {
    title: 'Participating',
    description: (
        <>Participate in the development of Go, reporting bugs, bisect causes, contribute to Go itself.</>
    ),
  },
  {
    title: 'Sharing',
    description: (
      <>Accumulate experience, structure knowledge, share it with others.</>
    ),
  },
  {
    title: 'Non-profit',
    description: (
      <>Go Faster is a non-profit, non-commercial organization and do not accept financial donations.</>
    ),
  }
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Features of go-faster projects.
export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
