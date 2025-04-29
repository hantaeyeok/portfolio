import React from "react";
import "./MainSection.css";

const MainSection = () => {
    return (
      <section className="main-section">
        <div className="main-div">
          <p className="main-subtext">
            안녕하세요, <br />
            백엔드 개발자 <span className="highlight">이이름</span>입니다.
          </p>
          
          <p className="main-description">
            맨트 웹 백엔드를 개발합니다. <br />
            ~~~~~~~~
          </p>
          
          <button className="main-resume-button">
            이력서 다운로드 ⬇
          </button>
        </div>
      </section>
    );
  };

  export default MainSection;