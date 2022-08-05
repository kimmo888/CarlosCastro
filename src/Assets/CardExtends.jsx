import React from 'react';

const CardExtends = (props) => {

    let SizeCard = ''
    if (props.size === 'small') {
        SizeCard = 'small'
    }else if (props.size === 'large') {
        SizeCard = 'large'
    }
    const SRC = props.img
    const TEXT = props.text

    return(
        <div >
            <picture className ={SizeCard}>
                <img src={SRC} alt=""/>
                <h2>{TEXT}</h2>
            </picture>
        </div>
    )
}

export default CardExtends;