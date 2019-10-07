import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainInfo from "./Components/MainInfo/MainInfo";
import MySkills from "./Components/MySkills/MySkills";
import Projects from "./Components/Projects/Projects";
import Slogan from "./Components/Slogan/Slogan";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
    titleBlock = {
        skills: {
            title: 'Мои навыки',
            h: 'HTML/CSS',
            j: 'JavaScript',
            r: 'React/Redux'
        },
        project: 'Мои работы',
        work: 'Рассматриваю варианты удаленнной работы',
        contacts: 'Контакты'
    };

    render() {
        return (
            <div className='App'>
                <div className='portfolio'>
                    <Header/>
                    <MainInfo/>
                    <MySkills skills={this.titleBlock.skills}/>
                    <Projects project={this.titleBlock.project}/>
                    <Slogan work={this.titleBlock.work}/>
                    <Contacts contacts={this.titleBlock.contacts}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
