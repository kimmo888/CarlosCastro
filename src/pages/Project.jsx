import React from 'react';
import Task from '../images/Gifts/task.gif'
import Layout from '../images/Gifts/Layout.gif';
import Templete from '../images/Gifts/template.gif';
import Shop from '../images/Gifts/shop.gif';
import '../styles/Project.scss';

const Project = () => {
    return (
        <div className='Master'>
            <h1 className='Title'> Mis Proyectos </h1>
            <div className='Container-gifts'>
                <div className='Gift'>
                    <h3 className='TitleApp'> Tienda </h3>
                    <figure className="figure">
                        <img src={Shop} alt="task" />
                    </figure>
                    <div className='Gift-text'>
                        <a href='https://github.com/kimmo888/ReactShop' target={"_blank"} rel='noreferrer' > Code </a>
                        <a href='https://kimmo888.github.io/ReactShop/' target={"_blank"} rel='noreferrer' > Page </a>
                    </div>
                        <p className='text-project'>Tienda Falsa echa en ReactJs, Sass, Uso De Api</p>
                </div>
                <div className='Gift'>
                    <h3 className='TitleApp'> App de tareas </h3>
                    <figure className="figure">
                        <img src={Task} alt="task" />
                    </figure>
                    <div className='Gift-text'>
                    <a href="https://github.com/kimmo888/React-Task" target="_blank" rel='noreferrer' >Code</a>
                    <a href="https://kimmo888.github.io/React-Task/" target="_blank" rel='noreferrer' >Page</a>
                    </div>
                        <p className='text-project'>App de tareas echa en ReactJs</p>
                </div>
                <div className='Gift'>
                    <h3 className='TitleApp'> Layout </h3>
                    <figure className="figure">
                        <img src={Layout} alt="task" />
                    </figure>
                    <div className='Gift-text'>
                        <a href='https://github.com/kimmo888/LayoutCss' target={"_blank"} rel='noreferrer' > Code </a>
                        <a href='https://kimmo888.github.io/LayoutCss/' target={"_blank"} rel='noreferrer' > Page </a>
                    </div>
                    <p className='text-project'>Layout de tienda anime echa en Html, Css</p>
                </div>
                <div className='Gift'>
                    <h3 className='TitleApp'> Pagina est??tica </h3>
                    <figure className="figure">
                        <img src={Templete} alt="task" />
                    </figure>
                    <div className='Gift-text'>
                        <a href='https://github.com/kimmo888/Crehana-htm-css' target={"_blank"} rel='noreferrer' > Code </a>
                        <a href='https://kimmo888.github.io/Crehana-htm-css/' target={"_blank"} rel='noreferrer' > Page </a>
                    </div>
                        <p className='text-project'>Pagina est??tica echa en Html, Css, Responsive</p>
                </div>
            </div>
        </div>
    )
}

export default Project;