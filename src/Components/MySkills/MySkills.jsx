import React from 'react';
import s from './MySkills.module.css';
import TitleBlock from "../TitleBlock/TitleBlock";
import htmlCss from '../../images/html-css.svg';
import js from '../../images/js.svg';
import react from '../../images/react.png';



const MySkills = (props) => {
    return (
        <div className={s.MySkills}>
            <div className={s.container}>
                <TitleBlock title={props.skills.title}/>
                <div className={s.skills}>
                    <div className={s.skill}>
                        <img className={s.imgSkill} src={htmlCss} alt='html-css'/>
                        <TitleBlock title={props.skills.h}/>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Nunc non blandit massa enim. Lacus sed viverra tellus in
                            hac habitasse platea dictumst. </span>
                    </div>
                    <div className={s.skill}>
                        <img className={s.imgSkill} src={js} alt='javascript'/>
                        <TitleBlock title={props.skills.j}/>
                        <span>Egestas sed sed risus pretium quam vulputate. Rhoncus aenean vel elit scelerisque mauris
                            pellentesque pulvinar. Amet porttitor eget dolor morbi non arcu risus quis varius. Posuere
                            morbi leo urna molestie at elementum eu facilisis.</span>
                    </div>
                    <div className={s.skill}>
                        <img className={s.imgSkill} src={react} alt='react'/>
                        <TitleBlock title={props.skills.r}/>
                        <span>Aliquam faucibus purus in massa. Etiam sit amet nisl purus in mollis nunc sed id.
                            Tortor id aliquet lectus proin nibh nisl condimentum id. Purus semper eget duis at.
                            Pretium fusce id velit ut tortor pretium viverra.</span>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default MySkills;