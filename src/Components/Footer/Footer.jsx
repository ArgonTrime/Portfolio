import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.container}>
                <h2>Игорь Тримайлов</h2>
                <div className={s.contact}>
                    <img className={s.contactImg} />
                    <img className={s.contactImg} />
                    <img className={s.contactImg} />
                    <img className={s.contactImg} />
                </div>
                <span>@2019 Все права защищены</span>
            </div>
        </div>
    )
};

export default Footer;