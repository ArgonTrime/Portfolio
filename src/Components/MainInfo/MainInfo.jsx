import React from 'react';
import s from './MainInfo.module.css';

const MainInfo = () => {
    return (
        <div className={s.MainInfo}>
            <div className={s.container}>
                <div className={s.info}>
                    <span>Привет</span>
                    <span>Меня зовут Игорь Тримайлов</span>
                    <span>Я front-end разработчик</span>
                </div>
                <div className={s.photo}>
                    <img src='' alt=''/>
                </div>
            </div>
        </div>
    )
};

export default MainInfo;