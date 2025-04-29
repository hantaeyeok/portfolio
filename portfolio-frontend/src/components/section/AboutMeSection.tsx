import React from "react";
import "./AboutMeSection.css";

const AboutMeSection = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="about-title"> ABOUT ME</h2>
            
            <div className="about-grid">
                <div className="about-item">
                <i className="fas fa-user icon" />
                <div>
                    <strong>이름</strong>
                    <p>한태역</p>
                </div>
                </div>

                <div className="about-item">
                <i className="fas fa-calendar-alt icon" />
                <div>
                    <strong>생년월일</strong>
                    <p>98.03.05</p>
                </div>
                </div>

                <div className="about-item">
                <i className="fas fa-phone icon" />
                <div>
                    <strong>연락처</strong>
                    <p>010-4582-5037</p>
                </div>
                </div>

                <div className="about-item">
                <i className="fas fa-envelope icon" />
                <div>
                    <strong>이메일</strong>
                    <p>gksxodur1@gmail.com</p>
                </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;