import React from 'react';
import Task from '../images/Gifts/task.gif'
import Layout from '../images/Gifts/Layout.gif';
import Templete from '../images/Gifts/template.gif';
import Shop from '../images/Gifts/shop.gif';

const Project = () => {
    return (
        <div>
            <figure className="figure">
                <img src={Task} alt="task" />
            </figure>
            <figure className="figure">
                <img src={Layout} alt="task" />
            </figure>
            <figure className="figure">
                <img src={Templete} alt="task" />
            </figure>
            <figure className="figure">
                <img src={Shop} alt="task" />
            </figure>
        </div>
    )
}

export default Project;