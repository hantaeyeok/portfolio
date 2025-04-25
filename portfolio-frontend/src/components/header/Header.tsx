import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <button className="header-button">HTY's Portfolio</button>

        <nav className="nav">
          {/* 햄버거 버튼 */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* 메뉴 리스트 */}
          <ul className={`header-ul ${isMenuOpen ? "open" : ""}`}>
            <li><a href="#about">About me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#career">Career</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
