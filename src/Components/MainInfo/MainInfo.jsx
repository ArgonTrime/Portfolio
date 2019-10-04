import React from 'react';
import s from './MainInfo.module.css';
import avatar from '../../images/avatar.jpg';

const MainInfo = () => {
    return (
        <div className={s.MainInfo}>
            <div className={s.container}>
                <div className={s.info}>
                    <span>Привет</span>
                    <span>Меня зовут Игорь Тримайлов</span>
                    <span>Я front-end разработчик</span>
                </div>
                    <img className={s.avatar} src={avatar} alt='avatar'/>
            </div>
        </div>
    )
};

export default MainInfo;