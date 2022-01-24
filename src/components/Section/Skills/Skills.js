import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills" data-aos="fade-up" id="skills">
      <Container>
        <Row>
          <Col>
            {" "}
            <div className="prog-holder">
              <h4>React js</h4>
              <div className="prog">
                <span style={{ width: `80%` }} data-progress="80%"></span>
              </div>
            </div>
            <div className="prog-holder">
              <h4>ANGULAR</h4>
              <div className="prog">
                <span style={{ width: `70%` }} data-progress="70%"></span>
              </div>
            </div>
            <div className="prog-holder">
              <h4>JAVASCRIPT</h4>
              <div className="prog">
                <span style={{ width: `90%` }} data-progress="90%"></span>
              </div>
            </div>
            <div className="prog-holder">
              <h4>Jquary</h4>
              <div className="prog">
                <span style={{ width: `85%` }} data-progress="85%"></span>
              </div>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="prog-holder">
              <h4>DEALING WITH VERSION CONTROLS (GITHUB)</h4>
              <div className="prog">
                <span style={{ width: `70%` }} data-progress="70%"></span>
              </div>
            </div>{" "}
            <div className="prog-holder">
              <h4>BOOTSTRAP</h4>
              <div className="prog">
                <span style={{ width: `90%` }} data-progress="90%"></span>
              </div>
            </div>{" "}
            <div className="prog-holder">
              <h4>Html &amp; CSS</h4>
              <div className="prog">
                <span style={{ width: `90%` }} data-progress="90%"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
