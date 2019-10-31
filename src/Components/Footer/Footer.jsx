import React from 'react';
import s from './Footer.module.css';
import google from '../../images/google.svg';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import telegram from '../../images/telegram.svg';

const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.container}>
                <h2>Игорь Тримайлов</h2>
                <div className={s.contact}>
                    <a href='mailto:ihar.trymailau@gmail.com'><img className={s.contactImg} src={google} alt='google-plus'/></a>
                    <a href='https://github.com/ArgonTrime'><img className={s.contactImg} src={github} alt='github'/></a>
                    <a href='https://www.linkedin.com/in/ihar-trymailau-3a778018a/'><img className={s.contactImg} src={linkedin} alt='linkedin'/></a>
                    <a href='https://t.me/ArgonTrime'><img className={s.contactImg} src={telegram} alt='telegram'/></a>
                </div>
                <span>©2019 Все права защищены</span>
            </div>
        </div>
    )
};

export default Footer;