import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {
    return (
    <footer  className="  mainNav pt-4 text-white">
        <Container fluid>
            <Row>
                <Col className="text-center py-3">
                    <h3>Location</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                    
                </Col>
                <Col className="text-center py-3">
                    <h3>AROUND THE WEB</h3>
                    <ul className="list-unstyled d-flex justify-content-center px-5 ">
                        <li className="border rounded-circle me-2 ">
                            <i className="fa-brands fa-lg fa-facebook-f icons"></i>
                        </li>
                        <li className="border rounded-circle me-2">
                            <i className="fa-brands fa-lg fa-twitter icons"></i>
                        </li>
                        <li className="border rounded-circle me-2">
                            <i className="fa-brands fa-lg fa-instagram icons"></i>
                        </li>
                        <li className="border rounded-circle me-2">
                            <i className="fa-brands fa-lg fa-linkedin icons"></i>
                        </li>
                    </ul>
                </Col>
                <Col className="text-center py-3">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>                    
                </Col>
            </Row>
            <Row>
                <Col className="text-center py-3 bg-dark">
                    <p className="mb-0">Copyright © Your Website 2021</p>
                </Col>
            </Row>
        </Container>
    </footer>
    ) 
}
