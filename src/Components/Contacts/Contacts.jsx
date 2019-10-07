import React from 'react';
import s from './Contacts.module.css';
import TitleBlock from "../TitleBlock/TitleBlock";

const Contacts = (props) => {
    return (
        <div className={s.Contacts}>
            <div className={s.container}>
                <div className={s.contactForm}>
                    <TitleBlock title={props.contacts}/>
                    <form className={s.form}>
                            <input/>
                            <input/>
                            <textarea className={s.message}/>
                        </form>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    )
};

export default Contacts;