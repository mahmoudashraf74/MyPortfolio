import { Col, Container, Form, Row, Button } from "react-bootstrap";
import {
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaChevronRight,
    FaGithub,
} from "react-icons/fa";

import "./Footer.css";
const Footer = () => {
    return (
        <div className="Footer" id="footer">
            <Container>
                <Row>
                    {/**********************First Col*********************/}

                    <Col>
                        <div className="footer-info">
                            <a className="logo" href="index.html">
                                MA
                            </a>
                            <p>
                                Ein Shams Street <br />
                                Cairo, Egypt
                                <br />
                                <br />
                                <strong>Phone:</strong> +02 01095691698
                                <br />
                                <strong>Email:</strong>
                                mahmoudyaqout163@gmail.com
                                <br /> <br />
                            </p>
                        </div>
                        <Row>
                            <div
                                className="social-links "
                                data-aos="fade-right"
                            >
                                <a
                                    href="https://twitter.com/Ashrof_74"
                                    className="twitter"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="https://www.facebook.com/Mahmoud.Ashraf.740/"
                                    className="facebook"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.instagram.com/mashraf74/"
                                    className="instagram"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <FaInstagram />
                                </a>
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
                            </div>
                        </Row>
                    </Col>
                    {/**********************second Col*********************/}
                    <Col>
                        <div className="footer-route" data-aos="fade-left">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <a href="Portfolio.html">
                                        {" "}
                                        <FaChevronRight className="arrow" />
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about">
                                        {" "}
                                        <FaChevronRight className="arrow" />
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a href="#services">
                                        {" "}
                                        <FaChevronRight className="arrow" />
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#services">
                                        {" "}
                                        <FaChevronRight className="arrow" />
                                        Terms of service
                                    </a>
                                </li>
                                <li>
                                    <a href="#services">
                                        {" "}
                                        <FaChevronRight className="arrow" />
                                        Privacy policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    {/**********************Thired Col*********************/}

                    <Col>
                        <div className="message" data-aos="fade-right">
                            <h2> Have a question or want to work together?</h2>{" "}
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="You Message"
                                    />
                                </Form.Group>
                                <Button
                                    as="input"
                                    type="submit"
                                    value="Submit"
                                    className="submit-btn"
                                />{" "}
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Footer;
