import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaCommentDots } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="menu-container">
      
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="ProjectSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
                PROJECT
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
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
// {/* {menuOpen && (
//   <div className="social-icons">
//     <a
//       href="https://open.kakao.com/talk" // 카카오톡 대화걸기 링크로 수정해주세요
//       target="_blank"
//       rel="noreferrer"
//       className="social-icon"
//     >
//       <FaCommentDots style={{left:"0"}}/>
//     </a>
//     <a
//       href="https://github.com/yourusername" // 깃허브 주소로 수정해주세요
//       target="_blank"
//       rel="noreferrer"
//       className="social-icon"
//     >
//       <FaGithub />
//     </a>
//   </div>
// )} */}