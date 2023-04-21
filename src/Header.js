import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProjectClick = () => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("project", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -70,
        });
      }, 100);
    } else {
      scroller.scrollTo("project", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  };

  const isHomePage = window.location.pathname === "/";

  return (
    <header className="header">
      <div className="menu-container">
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              {isHomePage ? (
                <ScrollLink
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                >
                  ABOUT
                </ScrollLink>
              ) : (
                <Link to="/#about" onClick={toggleMenu}>
                  ABOUT
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                >
                  PROJECT
                </ScrollLink>
              ) : (
                <Link to="/#project" onClick={handleProjectClick}>PROJECT</Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                >
                  CONTACT
                </ScrollLink>
              ) : (
                <Link to="/#contact" onClick={toggleMenu}>
                  CONTACT
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
