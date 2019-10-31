import React from 'react';
import s from './NavMenu.module.css';
import {Link} from "react-scroll";

const NavMenu = () => {
    return (
        <div className={s.nav}>
            {/*<a href='' className={s.link}>Главная</a>*/}
            {/*<a href='' className={s.link}>Навыки</a>*/}
            {/*<a href='' className={s.link}>Проекты</a>*/}
            {/*<a href='' className={s.link}>Контакты</a>*/}

            <Link
                activeClass={s.active}
                to='main'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Главная
            </Link>
            <Link
                activeClass={s.active}
                to='skills'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Навыки
            </Link>
            <Link
                activeClass={s.active}
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Проекты
            </Link>
            <Link
                activeClass={s.active}
                to='contacts'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Контакты
            </Link>
        </div>
    )
};

export default NavMenu;