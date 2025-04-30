import React from 'react';

import Header from './components/header/Header';
import AboutMeSection from "./components/section/AboutMeSection";
import MainSection from "./components/section/MainSection";
import SkillSection from './components/section/SkillSection';
import ProjectSection from './components/section/ProjectSection';
import { Routes, Route } from "react-router-dom";
import ContactSection from './components/section/ContactSection';

import './App.css';
import ProjectDetailPage from './pages/login/ProjectDetailPage';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className='main-container'>
        <MainSection/>
        <AboutMeSection/>
        <SkillSection/>
        <ProjectSection/>
        <ContactSection/>
        <ProjectDetailPage/>
        
        {/* <Section id="" title="">
          <p>핵심역량</p>
          <p>기술스텍</p>
        </Section>
        <Section id="" title="">
          <p>프로젝트 카드</p>          
        </Section>
        <Section id="" title="">
          <p>이메일로 연락하기</p>
        </Section> */}
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
