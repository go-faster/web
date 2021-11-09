import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FeatureList = [
  {
    title: 'Fast',
    description: (
        <>Designed to be quick and allocate less</>
    ),
  },
  {
    title: 'Reliable',
    description: (
        <>Fuzzing and high coverage testing</>
    ),
  },
  {
    title: 'Clear',
    description: (
        <>Consistent, small, documented packages</>
    ),
  },
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
