import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';


const projects = [
  {
    image: 'images/테스트1.png',
    link: '/project1-details',
  },
  {
    image: 'images/테스트2.png',
    link: '/project2-details',
  },
  {
    image: 'images/테스트3.png',
    link: '/project3-details',
  },
];

function ProjectSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30%',
  };

  return (
    <Element name="ProjectSection">
    <div className="project-section" id="ProjectSection">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-slide">
            <Link to={project.link}>
              <img src={project.image} alt={`Project ${index + 1}`} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
    </Element>
  );
}

export default ProjectSection;
