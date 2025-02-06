import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillSkype,
  AiFillSlackCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by SoftGlow</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} BD</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SoftGlow00"
                target="_blank"
                rel="noreferrer noreferrer"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li><li className="social-icons">
              <a
                href="https://join.skype.com/uoocsGPmVmvy"
                target="_blank"
                rel="noreferrer noreferrer"
                style={{ color: "white" }}
              >
                <AiFillSkype />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://bestfriends-mvq1406.slack.com/"
                target="_blank"
                rel="noreferrer noreferrer"
                style={{ color: "white" }}
              >
                <AiFillSlackCircle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/SakuraHaru21037"
                target="_blank"
                rel="noreferrer noreferrer"
                style={{ color: "white" }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="#"
                target="_blank"
                rel="noreferrer noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/harunosakura000101"
                target="_blank"
                rel="noreferrer noreferrer"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
