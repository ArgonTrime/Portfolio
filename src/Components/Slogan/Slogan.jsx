import React from 'react';
import s from './Slogan.module.css';

const Slogan = () => {
    return (
        <div className={s.Slogan}>
            <div className={s.container}>
                <div className={s.info}>
                    <span>Рассматриваю варианты удаленнной работы</span>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    )
};

export default Slogan;