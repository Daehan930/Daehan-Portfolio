import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>ABOUT</h2>
      <div className="about-content">
        <img src="testimg.png" alt="testimg" className="about-img" />
        <div className="about-text">
          <h3>
            기록과 공유를 좋아하는
            <br />
            <span style={{ color: "#0040BD" }}>장대한</span> 입니다.
          </h3>
          <p>
            프론트엔드 개발자를 희망하고 있습니다. 저는 사용자 경험을
            중요시하며, 최신 기술을 활용하여 기능과 디자인을 개선하는데 관심이
            많습니다.
          </p>
          <br />
          <p>
            프론트엔드 개발자를 희망하고 있습니다.
            배운 모든 것을 기록하고 공유하는 것을 좋아합니다.
            공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.
          </p>

        </div>

      </div>

      <h2>USE SKILL</h2>

      <div className="about-icons">

        <div className="image-container">
          <img src="icon/csscon.png" />
          <img src="icon/figmacon.png" />
          <img src="icon/gitcon.png" />
          <img src="icon/githubcon.png" />
          <img src="icon/htmlcon.png" />
          <img src="icon/jscon.png" />
          <img src="icon/jsoncon.png" />
          <img src="icon/mollu.png" />
          <img src="icon/mysqlcon.png" />
          <img src="icon/nextcon.png" />
        </div>
       <p>Last update: 2023/04/19</p>
      </div>
    </section>
  );
};

export default About;
