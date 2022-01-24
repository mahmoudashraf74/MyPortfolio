import { Col, Container, Button, Row } from "react-bootstrap";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="About" id="about">
      <Container data-aos="fade-left">
        <Row>
          <Col className="aboutme">
            <h3>front-end web developer</h3>
            <p>
              Bachelor’s degree at Computer and Information Sciences, I am
              always seeking to enhance my technical to increase my knowledge
              and my experts
            </p>
            <Row>
              <Col sm>
                <ul className="about-info" data-aos="fade-left">
                  <li>
                    <span>Name:</span>
                    <span className="details">Mahmoud Ashraf </span>
                  </li>
                  <li>
                    <span>Date of birth:</span>
                    <span className="details">March 16,1998 </span>
                  </li>
                  <li>
                    <span>Address:</span>
                    <span className="details">Cairo,Egypt </span>
                  </li>
                </ul>
                <p>
                  <Button
                    className="btn-get-cv btn btn-dark"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1Wl9ieVyVXJXF23B4sJoB-7kwZsbPgosP/view?usp=sharing"
                      )
                    }
                  >
                    Download CV
                  </Button>
                </p>
              </Col>
              <Col sm>
                <ul className="about-info" data-aos="fade-left">
                  <li>
                    <span>Email:</span>
                    <span className="details">mahmoudyaqout163@gmail.com</span>
                  </li>
                  <li>
                    <span>phone:</span>
                    <span className="details">01095691698 </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AboutMe;
