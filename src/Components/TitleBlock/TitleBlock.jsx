import React from 'react';
import s from './TitleBlock.module.css';

const TitleBlock = (props) => {
    return (
        <div className={s.titleBlock}>
            <h2>{props.title}</h2>
            <div className={s.line}/>
        </div>
    )
};

export default TitleBlock;