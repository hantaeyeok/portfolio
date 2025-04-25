import React from "react";
import "./MainSection.css";

const MainSection = () => {
    return (
      <section className="main-section">
        <div className="main-overlay">
          <img src="/logo.png" alt="main-img" className="main-logo" />
          <p className="main-subtext">
            안녕하세요, 백앤드 개발자 한태역 입니다.
          </p>
          <p>
            백엔드 개발자
            함께 ~~~ 찾고있습니다</p>
          <button>
          <a href="/resume.pdf" download className="main-resume-button">
            이력서 다운로드 ⬇
          </a>  
          </button>
        </div>
      </section>
    );
  };

  export default MainSection;