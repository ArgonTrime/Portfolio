import React from 'react';
import s from './Projects.module.css';

const Projects = () => {
    return (
        <div className={s.projects}>
            <div className={s.container}>
                <span>Мои работы</span>
                <div className={s.myProjects}>
                    <div className={s.item}>
                        <div className={s.itemImg}><button>Смотреть</button></div>
                        <span>Название проекта</span>
                        <span>Краткое описание</span>
                    </div>
                    <div className={s.item}>
                        <div className={s.itemImg}><button>Смотреть</button></div>
                        <span>Название проекта</span>
                        <span>Краткое описание</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;