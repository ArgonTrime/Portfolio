import React from 'react';
import s from './Skill.module.css';
import TitleBlock from "../../TitleBlock/TitleBlock";

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <img className={s.imgSkill} src={props.icon} alt='html-css'/>
            <TitleBlock title={props.title}/>
            <span>{props.description}</span>
        </div>
    )
};
export default Skill;