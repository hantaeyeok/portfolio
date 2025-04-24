import React from "react";
import "./Header.css";

const Header = () => {

    const [scrolled, setScrolled] =
    return (
        <header className="header">
            <div className="header-inner">
                <nav className="nav">
                    <button className="header-button">
                        HTY's Portfolio
                    </button>
                    <ul className="header-ul">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        {/* <li><a href="#">Career</a></li> */}
                    </ul>
                </nav>
            </div>
        </header>

    );
}