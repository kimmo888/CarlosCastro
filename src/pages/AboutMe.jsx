import React from 'react';
import '../styles/AboutMy.scss';
import GitHub from '../images/Svg/github.svg';
import In from '../images/Svg/in.svg';

const AboutMy = () => {
    return (
        <div className='ContenedorAboutMy'>
            <h1 className='TitleAbout'>Acerca de Mi</h1>
            <div className='AboutMy'>
                <figure className='Social'>
                <a href='https://github.com/kimmo888' target={"_blank"} rel='noreferrer' ><img src={GitHub} alt='GitHub' /></a>
                <a href='https://www.linkedin.com/in/carlos-augusto-castro-corrales-782211220/' target={"_blank"} rel='noreferrer' ><img src={In} alt='GitHub' /> </a>
                </figure>
                <p className='My-Text'>Me gusta aprender, usar el conocimiento adquirido en diferentes áreas y emplearlos en mi trabajo, tengo buenas habilidades para resolver problemas, me gusta trabajar en equipos donde pueda aportar y que me aporten conocimiento y habilidades</p>
            </div>
            <p></p>
        </div>
    )
}

export default AboutMy;