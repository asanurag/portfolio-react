//About.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpeg";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" className="profile-img" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I did my Bachelor&apos;s degree in Commerce from Sri Ram College
                            of Commerce in Varanasi. Afterward, I pursued a postgraduation in
                            MCA from RV College of Engineering, where I discovered my passion
                            for software development.
                        </p>
                        <br></br>
                        <p>
                            Recently, I completed a Full Stack Development certificate course
                            from KnowledgeHut UpGrade where I learned technologies like
                            JavaScript, React, MongoDB, Node.js, and Express. 
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Node.js</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>1+</h1>
                        <p>Years of Experience</p>
                    </div>
                    <hr/>
                    <div className="about-achievement">
                        <h1>4+</h1>
                        <p>Projects Completed</p>
                    </div>
                    <hr/>
                    <div className="about-achievement">
                        <h1>Master&apos;s Degree</h1>
                        <p>Master in Computer Application</p>
                    </div>
            </div>
        </div>
    );
};

export default About;
