import React from 'react';
import s from './MainInfo.module.css';
import avatar from '../../images/avatar.jpg';

const MainInfo = () => {
    return (
        <div className={s.MainInfo} id='main'>
            <div className={s.container}>
                <div className={s.info}>
                    <span>Привет</span>
                    <span>Меня зовут <span>Игорь Тримайлов</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div>
                    <img className={s.avatar} src={avatar} alt='avatar'/>
                </div>
            </div>
        </div>
    )
};

export default MainInfo;