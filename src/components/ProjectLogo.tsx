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
    const Image = () => (<img alt={alt} src={src} height={height} width={width}/>)
    let Logo = Image;

    if (link) {
        Logo = () => (<a href={link} about="Project link" target="_blank">
            <Image/>
        </a>)
    }
    return <div className={styles.logo}><Logo/></div>
}
