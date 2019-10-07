import React from 'react';
import s from './Slogan.module.css';
import TitleBlock from "../TitleBlock/TitleBlock";

const Slogan = (props) => {
    return (
        <div className={s.Slogan}>
            <div className={s.container}>
                <div className={s.info}>
                    {/*<h2>Рассматриваю варианты удаленнной работы</h2>*/}
                    {/*<div className={s.line}/>*/}
                    <TitleBlock title={props.work}/>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    )
};

export default Slogan;