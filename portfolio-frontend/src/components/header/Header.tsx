import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // 스크롤 시 헤더 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 헤더 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <button className="header-button">HTY's Portfolio</button>

        <nav className="nav" ref={navRef}>
          {/* 햄버거 버튼 (모바일용) */}
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
