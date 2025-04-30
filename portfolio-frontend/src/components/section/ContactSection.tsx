import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">감사합니다</h2>
      <p className="contact-subtitle">더 궁금한 점이 있다면<br />편하게 연락주세요</p>

      <div className="contact-box">
        <div className="contact-row">
          <span className="label">전화번호</span>
          <span>010.2321.8948</span>
        </div>
        <div className="contact-row">
          <span className="label">이메일</span>
          <span>gksxodur1@gmail.com</span>
        </div>
        <div className="contact-row">
          <span className="label">Github</span>
          <a href="https://github.com/hantaeyeok" target="_blank" rel="noopener noreferrer">
            @hantaeyeok
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
