import React from 'react';
import CardExtends from '../Assets/CardExtends';
import '../styles/Technologies.scss';
import Html from '../images/Logos-Tech/html5.png';
import Css from '../images/Logos-Tech/css3.png';
import Js from '../images/Logos-Tech/js.png';
import Sass from '../images/Logos-Tech/sass.png';
import Webpack from '../images/Logos-Tech/webpack.png';
import Rc from '../images/Logos-Tech/react.png';
import Gimp from '../images/Logos-Tech/GIMP.png';
import InkScape from '../images/Logos-Tech/Inkscape.png';
import Blender from '../images/Logos-Tech/blender.png';
import Git from '../images/Logos-Tech/Git.png';
import Node from '../images/Logos-Tech/nodejs.png';
import Npm from '../images/Logos-Tech/npm.png';
import Vs from '../images/Logos-Tech/vscode.png';

const Technologies = () => {

    return (
        <div className='list'>
            <span className='titleImages'>Software</span>
            <div className='wrapper'>
                <div className='Container' >
                    <CardExtends img={Html} text={'html5'}/>
                    <CardExtends img={Css} text={'Css3'} />
                    <CardExtends img={Js} text={'JavaScript'} />
                    <CardExtends img={Sass} text={'Sass'} />
                    <CardExtends img={Vs} text={'Vs Code'} />
                    <CardExtends img={Npm} text={'Npm'} />
                    <CardExtends img={Webpack} text={'Webpack'} />
                    <CardExtends img={Git} text={'Git'} />
                    <CardExtends img={Node} text={'Node Js'} />
                    <CardExtends img={Rc} text={'React Js'} />
                    <CardExtends img={Gimp} text={'Gimp'} />
                    <CardExtends img={Blender} text={'Blender3d'}/>
                    <CardExtends img={InkScape} text={'Inkscape'}/>
                </div>
            </div>
        </div>
    )
}

export default Technologies;