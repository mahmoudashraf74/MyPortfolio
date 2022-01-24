import { Col, Container, Row } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";

import "./Certification.css";

const Certification = () => {
    return (
        <div className="certification" id="certification">
            <Container>
                <h2>
                    <GrCertificate className="c-icon" />
                    Certification
                </h2>
                <Row>
                    <Col>
                        <ul>
                            <li data-aos="fade-down">
                                <FaCertificate className="c-icon" />
                                <a
                                    rel="noopener noreferrer"
                                    className="drive"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1NGNk9rsIBaIjJ5VvAUP9APgPCl6a0jRU/view?usp=sharing"
                                >
                                    {" "}
                                    Front-End Developer -Mahara-Tech ITI
                                    (09/2021)
                                    <AiOutlineLink />
                                </a>
                            </li>{" "}
                            <li data-aos="fade-down">
                                <FaCertificate className="c-icon" />
                                <a
                                    rel="noopener noreferrer"
                                    className="drive"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1d-2k-OfisjypV7ZJ2HzC1jni1VbjBE8_/view?usp=sharing"
                                >
                                    {" "}
                                    JavaScript - Mahara-Tech iti (03/2021){" "}
                                    <AiOutlineLink />
                                </a>
                            </li>{" "}
                            <li data-aos="fade-up">
                                <FaCertificate className="c-icon" />
                                <a
                                    rel="noopener noreferrer"
                                    className="drive"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/13-w3nXX55dV-4rX2cSPxAqblu1khElv8/view?usp=sharing"
                                >
                                    {" "}
                                    HTML5 and CSS3 - Mahara-Tech iti (02/2021){" "}
                                    <AiOutlineLink />
                                </a>
                            </li>{" "}
                            <li data-aos="fade-up">
                                <FaCertificate className="c-icon" />
                                <a
                                    rel="noopener noreferrer"
                                    className="drive"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1UHtdiP7OU-imxl7gys_1x9BYEJxdaSjq/view?usp=sharing"
                                >
                                    {" "}
                                    Introduction to Programming Using Python -
                                    Microsoft (06/2019) <AiOutlineLink />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li data-aos="fade-up">
                                <FaCertificate className="c-icon" />
                                <a
                                    rel="noopener noreferrer"
                                    className="drive"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1DBOxGUcSK8t2v8WnDrEB_utpIOpdVvGp/view?usp=sharing"
                                >
                                    {" "}
                                    Data Science and Big Data Analytics - Dell
                                    EMC (04/2019) <AiOutlineLink />
                                </a>
                            </li>{" "}
                            <li data-aos="fade-up">
                                <FaCertificate className="c-icon" />
                                <a
                                    rel="noopener noreferrer"
                                    className="drive"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1_7SSYI-EhrYbOHvPhIzSnGuQH7xV8m7j/view?usp=sharing"
                                >
                                    {" "}
                                    Full Stack Web Developer Nanodegree-Udacity
                                    (09/2018 - 03/2019) <AiOutlineLink />
                                </a>
                            </li>{" "}
                            <li data-aos="fade-down">
                                <FaCertificate className="c-icon" />
                                <a
                                    rel="noopener noreferrer"
                                    className="drive"
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1_7SSYI-EhrYbOHvPhIzSnGuQH7xV8m7j/view?usp=sharing"
                                >
                                    {" "}
                                    Full Stack Web Developer - Next Technology
                                    Leaders (NTL) (09/2018 - 03/2019){" "}
                                    <AiOutlineLink />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Certification;
