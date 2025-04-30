import React from "react";
import "./MainSection.css";

const MainSection = () => {
    return (
      <section className="main-section">
        <div className="main-div">
          <p className="main-subtext">
            안녕하세요, <br />
            백엔드 개발자 <span className="highlight">한태역 </span>입니다.
          </p>
          
          <p className="main-description">
          Spring 기반 REST API와 <br />
          안정적인 데이터 흐름을 구현합니다.<br/>
          작동하는 것에 그치지 않고, <br />
          유지보수와 확장을 고려한<br/>
           백엔드를 만들기 위해 노력하고있습니다.
          </p>
          
          <a href="/resume.pdf" download className="main-resume-button">
  이력서 다운로드
</a>
        </div>
      </section>
    );
  };

  export default MainSection;