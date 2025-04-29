import React from 'react';
import logo from './logo.svg';
import Header from './components/header/Header';
import AboutMeSection from "./components/section/AboutMeSection";
import MainSection from "./components/section/MainSection";
import SkillSection from './components/section/SkillSection';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <main className='main-container'>
        <MainSection/>
        <AboutMeSection/>
        <SkillSection/>
        {/* <ProjectSection>/> */}
        {/* <Footer>/> */}
        
        
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
