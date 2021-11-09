import React from 'react';
import styles from './ProjectLogo.module.css';

type LogoProps = {
    src: string;
    alt?: string;
    link?: string;
    height?: number;
    width?: number;
};

// LogoSize is default ProjectLogo size.
export const LogoSize = 100;

export const ProjectLogo = ({src, link, alt="logo", height=LogoSize, width}: LogoProps): JSX.Element => {
    let Image = () => (<img alt={alt} src={src} height={height} width={width}/>)

    if (link) {
        Image = () => (<a href={link} about="Project link" target="_blank">
            <img alt={alt} src={src} height={height} width={width}/>
        </a>)
    }
    return <div className={styles.logo}><Image/></div>
}
