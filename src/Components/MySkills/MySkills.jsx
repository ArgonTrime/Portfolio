import React from 'react';
import s from './MySkills.module.css';
import TitleBlock from "../TitleBlock/TitleBlock";
import htmlCss from '../../images/html-css.svg';
import js from '../../images/js.svg';
import react from '../../images/react.png';
import {Fade} from "react-reveal";
import Skill from "./Skill/Skill";

const MySkills = (props) => {
    return (
        <div className={s.MySkills} id='skills'>
            <Fade bottom>
                <div className={s.container}>
                    <TitleBlock title={props.skills.title}/>
                    <div className={s.skills}>
                        <Skill icon={htmlCss}
                               title={props.skills.h}
                               description={props.description.htmlCss}/>
                        <Skill icon={js}
                               title={props.skills.j}
                               description={props.description.javaScript}/>
                        <Skill icon={react}
                               title={props.skills.r}
                               description={props.description.reactRedux}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
};
export default MySkills;