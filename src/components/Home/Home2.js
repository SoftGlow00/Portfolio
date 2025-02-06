import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillSkype,
  AiFillSlackCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type_dec";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Full Stack Developer and DevOps Engineer dedicated to creating seamless, efficient, and scalable digital solutions.… <span className="wave" role="img" aria-labelledby="wave">🤷‍♂️</span>
              <br />
              <br />My expertise spans
              <i>
                <b className="purple"> front-end </b>
              </i>and
              <i>
                <b className="purple"> back-end </b>
              </i>
              development, coupled with hands-on experience in 
              <i>
                <b className="purple"> managing infrastructure  </b>
              </i>
              and 
              <i>
                <b className="purple"> cloud services </b>
              </i>.{'\n'}
              I thrive on solving complex challenges and optimizing systems for performance and reliability.
              <br />
              <br />
              With a strong focus on collaboration, I enjoy building innovative products that make a real impact.
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              I aim to continuously grow as a Full Stack Developer and DevOps Engineer, mastering emerging technologies and industry best practices. 
              <br />
              My vision is to build innovative, scalable solutions that solve real-world problems and enhance user experiences. 
              <br />
              I aspire to contribute to projects that drive positive change, embracing challenges as opportunities for growth. 
              <br />
              <div style={{ textAlign: 'center', height: '3rem'}}>
                <Type />
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src='/Assets/avatar.svg' className="img-fluid my-photo" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SoftGlow00"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li><li className="social-icons">
                <a
                  href="https://join.skype.com/uoocsGPmVmvy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillSkype />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://bestfriends-mvq1406.slack.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillSlackCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SakuraHaru21037"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harunosakura000101"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
