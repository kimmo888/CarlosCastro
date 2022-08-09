import React from 'react';
import '../styles/AboutMy.scss';
import GitHub from '../images/Svg/github.svg';
import In from '../images/Svg/in.svg';

const AboutMy = () => {
    return (
        <div className='ContenedorAboutMy'>
            <h1 className='TitleAbout'>About Me</h1>
            <div className='AboutMy'>
                <figure className='Social'>
                <a href='https://github.com/kimmo888' target={"_blank"} rel='noreferrer' ><img src={GitHub} alt='GitHub' /></a>
                <a href='https://www.linkedin.com/in/carlos-augusto-castro-corrales-782211220/' target={"_blank"} rel='noreferrer' ><img src={In} alt='GitHub' /> </a>
                </figure>
                <p className='My-Text'> aca va la info de mi descripción</p>
            </div>
            <p></p>
        </div>
    )
}

export default AboutMy;