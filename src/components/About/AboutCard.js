import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">BlockDev Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently working as a full-stack developer and DevOps, specializing in creating seamless web and mobile applications in Red Oak, Texas.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />&nbsp; Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />&nbsp; Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight />&nbsp; Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Trust is earned, credit is given"{" "}
          </p>
          <footer className="blockquote-footer">Block Dev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
