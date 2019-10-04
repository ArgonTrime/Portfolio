import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.container}>
                <span>Игорь Тримайлов</span>
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