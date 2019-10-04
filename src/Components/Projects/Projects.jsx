import React from 'react';
import s from './Projects.module.css';

const Projects = () => {
    return (
        <div className={s.Projects}>
            <div className={s.container}>
                <div className={s.info}>
                    <h1>Мои работы</h1>
                </div>
                <div className={s.project}>
                    <div className={s.item}>
                        <img className={s.itemImg}/>
                        <div className={s.itemInfo}>
                            <span>Название проекта</span>
                            <span>Краткое описание</span>
                        </div>
                    </div>
                    <div className={s.item}>
                        <img className={s.itemImg}/>
                        <div className={s.itemInfo}>
                            <span>Название проекта</span>
                            <span>Краткое описание</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;