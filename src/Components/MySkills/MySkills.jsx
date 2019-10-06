import React from 'react';
import s from './MySkills.module.css';

const MySkills = () => {
    return (
        <div className={s.MySkills}>
            <div className={s.container}>
                <div className={s.info}>
                    <h1>Мои навыки</h1>
                    <div className={s.line}/>
                </div>
                <div className={s.skills}>
                    <div className={s.skill}>
                        <img className={s.imgSkill}/>
                        <h1>HTML/CSS</h1>
                        <div className={s.lineSmall}/>
                        <span>Описание</span>
                    </div>
                    <div className={s.skill}>
                        <img className={s.imgSkill}/>
                        <h1>JavaScript</h1>
                        <div className={s.lineSmall}/>
                        <span>Описание</span>
                    </div>
                    <div className={s.skill}>
                        <img className={s.imgSkill}/>
                        <h1>React/Redux</h1>
                        <div className={s.lineSmall}/>
                        <span>Описание</span>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default MySkills;