import React from 'react';
import s from './Contacts.module.css';
import TitleBlock from "../TitleBlock/TitleBlock";
import Button from "../Button/Button";
import {Fade} from "react-reveal";

const Contacts = (props) => {
    return (
        <div className={s.Contacts}>
            <Fade bottom>
                <div className={s.container}>
                    <div className={s.contactForm}>
                        <TitleBlock title={props.contacts}/>
                        <form className={s.form}>
                            <input placeholder='Имя' type='text'/>
                            <input placeholder='email' type='email'/>
                            <textarea className={s.message} placeholder='Сообщение'/>
                        </form>
                        <Button btn={props.btn.s}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Contacts;