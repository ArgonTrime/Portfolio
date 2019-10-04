import React from 'react';
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.Contacts}>
            <div className={s.container}>
                <div className={s.contactForm}>
                    <span>Контакты</span>
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