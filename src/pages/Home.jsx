import React from 'react';
import Background from './Background';
import FrontPage from './FrontPage';
import Project from './Project';
import Technologies from './Technologies';
import '../styles/Home.scss';
import AboutMy from './AboutMy';

const Home = () => {
    return (
        <div className='ContainerHome'>
            {/* <Background /> */}
            <FrontPage />
            <AboutMy />
            <Technologies />
            <Project />
        </div>
    )
}

export default Home;