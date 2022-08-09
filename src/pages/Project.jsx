import React from 'react';
import Task from '../images/Gifts/task.gif'
import Layout from '../images/Gifts/Layout.gif';
import Templete from '../images/Gifts/template.gif';
import Shop from '../images/Gifts/shop.gif';
import '../styles/Project.scss';

const Project = () => {
    return (
        <div className='Master'>
            <h1 className='Title'> My Projects </h1>
            <div className='Container-gifts'>
                <div className='Gift'>
                    <h3 className='TitleApp'> Task App </h3>
                    <figure className="figure">
                        <img src={Task} alt="task" />
                    </figure>
                    <div className='Gift-text'>
                    <a href='https://github.com/kimmo888/React-Task' target={"_blank"} > Code </a>
                        <p> Web </p>
                    </div>
                </div>
                <div className='Gift'>
                    <h3 className='TitleApp'> Layout </h3>
                    <figure className="figure">
                        <img src={Layout} alt="task" />
                    </figure>
                    <div className='Gift-text'>
                        <a href='https://github.com/kimmo888/React-Task' target={"_blank"} > Github </a>
                        <p> Web </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;