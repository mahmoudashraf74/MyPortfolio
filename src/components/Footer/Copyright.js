import { Container } from "react-bootstrap";
import "./Copyright.css";

const Copyright = () => {
    return (
        <div className="copyright">
            <Container>
                &copy; Copyright{" "}
                <strong>
                    <span>
                        {" "}
                        <a href="https://www.linkedin.com/in/mahmoud-ashraf-66a070174/">
                            Mahmoud Ashraf
                        </a>
                    </span>
                </strong>
                . All Rights Reserved <br />
            </Container>
        </div>
    );
};
export default Copyright;
