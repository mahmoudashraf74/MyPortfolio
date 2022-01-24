import { Col, Container, Row } from "react-bootstrap";
import { MdComputer } from "react-icons/md";
import { SiFastapi, SiDependabot } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";

import "./About.css";

const About = () => {
  return (
    <div>
      <Container data-aos="fade-right">
        <Row className="about-icons">
          <Col sm>
            <SiFastapi className="icon" />
            <br />
            <h2>Fast</h2>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </Col>
          <Col sm>
            <MdComputer className="icon" />
            <br />
            <h2>Responsive</h2>
            <p>My layouts will work on any device, big or small.</p>
          </Col>{" "}
          <Col sm>
            <SiDependabot className="icon" />
            <br />
            <h2>Intuitive</h2>
            <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </Col>{" "}
          <Col sm>
            <IoRocketOutline className="icon" />
            <br />
            <h2>Dynamic</h2>
            <p>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
