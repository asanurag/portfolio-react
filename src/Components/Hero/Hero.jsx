// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-img">
        <img src={profile_img} alt="hero" className="profile-img" />
      </div>
      <h1>Hi,
       <span> I&apos;m Anurag,</span> Full-Stack Developer based in India.
      </h1>
      <p>
        I am a full-stack developer from India, with strong foundation, in web development, creative,
        analytical skills & team player. Seeking
        opportunities to apply my skills and contribute to dynamic web
        development projects.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
            </AnchorLink>
        </div>
        <div className="hero-resume">
        <a href={resume} target="_blank" rel="noopener noreferrer">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
