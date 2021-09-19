import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
    return (
            <footer>
                <Container>
                    <Row>
                        <Col md>
                            <div className="footerIcons">
                                <a>
                                    <i class="fab fa-vimeo"></i>
                                </a>
                                <a>
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </Col>
                        <Col md>
                            <div className="footerText">
                                <span>hello@yay.com</span>
                                <span>Copiright 2020</span>
                            </div>
                        </Col>
                    </Row>
                    
                    
                </Container>
            </footer>
    )
}

export default Footer


//I didn't put href to these links because they are not leading anywhere, but I am aware they should have href.