import React from 'react';
import '../styles/Front_Page.scss';
import Foto from '../images/Foto1.png';
import Avatar from '../images/Images02.png';

const FrontPage = () => {
    return (
        <div className='Container'>
            <div className='Text-Dev'>
                <h1>FRONT-END</h1>
                <h2>DEVELOPER</h2>
            </div>
            <div className='Container-Card'>
                <div className='Card'>
                    <figure className='Front'>
                        <img className='Foto' src={Foto} alt='Front Page' />
                    </figure>
                    <figure className='Back'>
                        <img className="Avatar" src={Avatar} alt='Avatar' />
                    </figure>
                </div>
                <div className='Content'>
                    <div className='Details'>
                        <div className='Kimmo'>
                            <p>Kimmo888</p>
                        </div>
                        <h2>Carlos A. Castro</h2>
                        <h3>Front-End Developer</h3>
                        <div className='actionBtn'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage;