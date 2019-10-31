import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainInfo from "./Components/MainInfo/MainInfo";
import MySkills from "./Components/MySkills/MySkills";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Particles from 'react-particles-js';

class App extends React.Component {
    particlesOpt = {
        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 900

                }
            }
        }
    };
    titleBlock = {
        skills: {
            title: 'Мои навыки',
            h: 'HTML/CSS',
            j: 'JavaScript',
            r: 'React/Redux'
        },
        project: 'Мои работы',
        contacts: 'Контакты',
        button: {
            s: 'Отправить',
            v: 'Смотреть',
        }
    };
    description = {
        htmlCss: 'Создание структуры и оформления страницы и компонент.',
        javaScript: 'Написание логики компонент.',
        reactRedux: 'Создание компонент, работа с Redux store и другими npm библиотеками.'
    };

    render() {
        return (
            <div className='App'>
                <div className='portfolio'>
                    <Particles className='particles'
                               params={this.particlesOpt}/>
                    <Header/>
                    <MainInfo/>
                    <MySkills skills={this.titleBlock.skills}
                              description={this.description}/>
                    <Projects project={this.titleBlock.project}
                              btn={this.titleBlock.button}/>
                    <Contacts contacts={this.titleBlock.contacts}
                              btn={this.titleBlock.button}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}
export default App;