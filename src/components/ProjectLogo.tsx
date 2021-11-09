import React from 'react';
import styles from './ProjectLogo.module.css';

type LogoProps = {
    src: string;
    alt?: string;
    height?: number;
    width?: number;
};

// LogoSize is default ProjectLogo size.
export const LogoSize = 100;

export const ProjectLogo = ({src, alt="logo", height=LogoSize, width}: LogoProps): JSX.Element => {
    return <div className={styles.logo}>
        <img alt={alt} src={src} height={height} width={width}/>
    </div>
}
