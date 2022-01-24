import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Header.css";
const Headers = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="logo " href="#home" data-aos="fade-right">
            MA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <NavDropdown title="CERTI & SKILLS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#certification">
                  Certification
                </NavDropdown.Item>

                <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#footer">Contact</Nav.Link>
            </Nav>
            <Nav className="social-links ">
              <a
                href="https://www.linkedin.com/in/mahmoud-ashraf-66a070174/"
                className="linkedin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>{" "}
              <a
                href="https://github.com/mahmoudashraf74?tab=repositories"
                className="github"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Headers;
