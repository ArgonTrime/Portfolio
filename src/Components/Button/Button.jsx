import React from 'react';
import s from './Button.module.css';


const Button= (props) => {
    return (
        <button className={s.btn}>{props.btn}</button>
    )
};

export default Button;