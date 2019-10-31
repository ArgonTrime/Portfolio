import React from 'react';
import s from './Projects.module.css';
import TitleBlock from "../TitleBlock/TitleBlock";
import Button from "../Button/Button";
import {Fade} from "react-reveal";

const Projects = (props) => {
    return (
        <div className={s.projects} id='projects'>
            <Fade bottom>
                <div className={s.container}>
                    <TitleBlock title={props.project}/>
                    <div className={s.myProjects}>
                        <div className={s.item}>
                            <div className={s.itemImg}><Button btn={props.btn.v}/></div>
                            <span>Social network</span>
                            <span>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
                            Lacus laoreet non curabitur gravida arcu ac. Nunc mi ipsum faucibus
                            vitae aliquet.</span>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemImg}><Button btn={props.btn.v}/></div>
                            <span>Counter</span>
                            <span>arius duis at consectetur lorem donec. Hac habitasse platea dictumst
                            quisque sagittis. In fermentum posuere urna nec tincidunt.</span>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Projects;