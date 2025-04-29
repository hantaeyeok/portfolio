import React from "react";
import "./SkillSection.css";

const SkillSection = () => {
  return (
    <section className="skill-section">
      <p className="skill-label">기술 스택 및 도구</p>
      <h3 className="skill-title">아래의 기술을 사용할 수 있습니다.</h3>

      {/* 카테고리 탭 */}
      <div className="skill-tabs">
        <button className="skill-tab">프론트엔드</button>
        <button className="skill-tab">라이브러리</button>
        <button className="skill-tab">환경 및 배포</button>
        <button className="skill-tab">디자인</button>
      </div>

      {/* 기술 아이콘 그리드 (칸만) */}
      <div className="skill-grid">
        <div className="skill-icon-placeholder"></div>
        <div className="skill-icon-placeholder"></div>
        <div className="skill-icon-placeholder"></div>
        <div className="skill-icon-placeholder"></div>
        <div className="skill-icon-placeholder"></div>
        <div className="skill-icon-placeholder"></div>
        <div className="skill-icon-placeholder"></div>
        <div className="skill-icon-placeholder"></div>
      </div>
    </section>
  );
};

export default SkillSection;
