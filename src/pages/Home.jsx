import React from 'react';
import Background from './Background';
import FrontPage from './FrontPage';
import Project from './Project';
import Technologies from './Technologies';
import '../styles/Home.scss';

const Home = () => {
    return (
        <div className='ContainerHome'>
            <Background />
            <FrontPage />
            <Technologies />
            <Project />
        </div>
    )
}

export default Home;