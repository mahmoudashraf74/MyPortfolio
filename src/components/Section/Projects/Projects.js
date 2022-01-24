import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";

import info from "./ProjectsData";

import "./Projects.css";
const Projects = () => {
  const [data, setData] = useState(info);

  const handleBtn = (e) => {
    let word = e.target.value;

    if (word === "All") {
      setData(info);
    } else if (word === "react") {
      const filtered = info.filter((item) => item.using === "React");
      setData(filtered);
    } else if (word === "angular") {
      const filtered = info.filter((item) => item.using === "Angular");
      setData(filtered);
    } else if (word === "html") {
      const filtered = info.filter((item) => item.using === "Html & Css");
      setData(filtered);
    } else {
      setData(info);
    }
  };
  return (
    <div className="project" id="projects">
      <Container>
        <div className="btn-filter">
          <Button
            className="active"
            variant="outline-light"
            value="all"
            onClick={handleBtn}
          >
            All
          </Button>{" "}
          <Button variant="outline-light" value="react" onClick={handleBtn}>
            React
          </Button>{" "}
          <Button variant="outline-light" value="angular" onClick={handleBtn}>
            Angular
          </Button>{" "}
          <Button variant="outline-light" value="html" onClick={handleBtn}>
            HTMl & CSS
          </Button>{" "}
        </div>

        <div className="project-contianer">
          <Row>
            {data.map((item) => (
              <Col key={item.id}>
                <Card className="box react" style={{ width: "20rem" }}>
                  <img src={item.pic} alt="pic1" />
                  <Card.Body className="caption">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.using}</Card.Text>
                    <Row>
                      <Col>
                        <div className="button">
                          <a
                            rel="noopener noreferrer"
                            className="btn-card"
                            target="_blank"
                            href={item.githup}
                          >
                            Learn more
                            <FaGithub className="githup-icon" />
                          </a>
                          <a
                            rel="noopener noreferrer"
                            className="live-icon"
                            target="_blank"
                            href={item.live}
                          >
                            <GrView />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Projects;
