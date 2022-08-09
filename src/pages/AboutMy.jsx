import React from 'react';
import '../styles/AboutMy.scss';
import GitHub from '../images/Svg/github.svg';
import In from '../images/Svg/in.svg';

const AboutMy = () => {
    return (
        <div className='ContenedorAboutMy'>
            <h1>About My</h1>
            <div className='AboutMy'>
                <figure className='Social'>
                    <img src={GitHub} alt='GitHub' />
                    <img src={In} alt='GitHub' />
                </figure>
            </div>
            <p></p>
        </div>
    )
}

export default AboutMy;